/* Panoramic Depth Atlas · dependency-free, buildless research browser. */
(() => {
  'use strict';
  const catalog = window.ATLAS_DATA || {};
  const records = Array.isArray(catalog.records) ? catalog.records : [];
  const byId = new Map(records.map(record => [String(record.id), record]));
  const STORAGE_KEY = 'panoramic-depth-atlas:v1';
  const defaults = { collection: 'depth', category: 'panoramic', q: '', year: 'all', scale: 'all', code: 'all', view: 'cards', sort: 'newest', favorites: false };
  const categories = [
    { id: 'all', title: 'All geometries', zh: '全部相机模型', icon: '▦', depth: 'Depth estimation', slam: 'SLAM & odometry', description: '跨相机模型检索方法，比较投影假设、输入输出与复现条件。' },
    { id: 'panoramic', title: 'Panoramic', zh: '全景 · 360°', icon: '◎', depth: '全景深度', slam: '全景定位与建图', description: '以球面与等距柱状投影为核心，检索 360° 场景深度与空间感知研究。' },
    { id: 'fisheye', title: 'Fisheye', zh: '鱼眼相机', icon: '◉', depth: '鱼眼深度', slam: '鱼眼定位与建图', description: '关注鱼眼成像与畸变模型，查看原生鱼眼支持及可复现的输入输出。' },
    { id: 'wide', title: 'Wide-FOV', zh: '广视场相机', icon: '◒', depth: '广视场深度', slam: '广视场定位与建图', description: '查找广视场与跨相机模型方法，区分视场覆盖和原生投影支持。' },
    { id: 'perspective', title: 'Perspective', zh: '透视相机 · 基线', icon: '▱', depth: '透视深度基线', slam: '透视定位与建图', description: '收录有比较价值的透视方法与基础模型，为全景实验建立参照。' },
    { id: 'multi', title: 'Multi-camera', zh: '多相机系统', icon: '◈', depth: '多相机深度', slam: '多相机定位与建图', description: '比较多相机输入、外参假设、融合方式及机器人系统接入条件。' }
  ];
  const categoryMap = new Map(categories.map(category => [category.id, category]));
  const scales = { metric: 'Metric · 度量尺度', relative: 'Relative · 相对尺度', mixed: 'Mixed · 依配置而定', unknown: 'Unknown · 待核实' };
  const shortScales = { metric: 'Metric', relative: 'Relative', mixed: 'Mixed scale', unknown: 'Scale 未核实' };
  const codes = { released: '代码已发布', partial: '代码部分发布', unverified: '代码状态待核实', none: '未发现公开代码' };
  const depthTypes = { range: 'Range · 径向距离', z: 'Z-depth · 光轴深度', inverse: 'Inverse depth · 逆深度', points: '3D points · 三维点', mixed: '依任务或配置而定', unknown: '深度定义待核实', none: '不直接输出深度' };
  const cameraLabels = { panoramic: 'Panoramic', fisheye: 'Fisheye', wide: 'Wide-FOV', perspective: 'Perspective', multi: 'Multi-camera' };
  const $ = id => document.getElementById(id);
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined && value !== null) node.textContent = String(value);
    return node;
  };
  const asList = value => Array.isArray(value) ? value : value === undefined || value === null || value === '' ? [] : [value];
  const text = value => {
    if (value === undefined || value === null || value === '') return '待核实';
    if (value === true) return '是';
    if (value === false) return '否';
    if (Array.isArray(value)) return value.map(text).join('；');
    if (typeof value === 'object') return Object.entries(value).map(([key, val]) => `${key}: ${text(val)}`).join('\n');
    return String(value);
  };
  const isUnknown = value => value === undefined || value === null || value === '' || value === 'unknown' || value === 'unverified';
  const safeUrl = value => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const parsed = new URL(value); return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : null; } catch { return null; }
  };
  const methodName = record => text(record.name || record.title || record.id);
  const codeStatus = record => Object.hasOwn(codes, record.codeStatus) ? record.codeStatus : 'unverified';
  const scaleValue = record => Object.hasOwn(scales, record.scale) ? record.scale : 'unknown';
  const cameras = record => asList(record.cameras).map(String);
  let stored = {};
  try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { /* Storage is optional. */ }
  if (!stored || typeof stored !== 'object') stored = {};
  const favorites = new Set(asList(stored.favorites).filter(id => byId.has(String(id))).map(String));
  const selected = new Set();
  let state = normalizeState({ ...defaults, ...(stored.state || {}) });
  if ([...new URLSearchParams(location.search).keys()].some(key => Object.hasOwn(defaults, key))) state = stateFromUrl();
  const searchIndex = new Map(records.map(record => [String(record.id), text({ id: record.id, name: record.name, title: record.title, aliases: record.aliases, authors: record.authors, institutions: record.institutions, year: record.year, venue: record.venue, summary: record.summary, cameras: record.cameras, tags: record.tags, family: record.family, scale: record.scale, scaleNote: record.scaleNote, license: record.license, input: record.inputs, output: record.outputDetails }).toLocaleLowerCase()]));
  // Short ASCII queries are usually method abbreviations (DA, GS, VO).
  // Avoid matching every entry merely because its evidence says "dataset".
  const shortSearchIndex = new Map(records.map(record => [String(record.id), text([record.id, record.name, record.aliases]).toLocaleLowerCase()]));
  let lastDialogFocus = null;
  let toastTimer;
  let currentDetailId = null;
  let filtered = [];

  function normalizeState(candidate) {
    const result = { ...defaults, ...candidate };
    if (!['depth', 'slam'].includes(result.collection)) result.collection = defaults.collection;
    if (!categoryMap.has(result.category)) result.category = defaults.category;
    if (!['all', ...Object.keys(scales)].includes(result.scale)) result.scale = 'all';
    if (!['all', ...Object.keys(codes)].includes(result.code)) result.code = 'all';
    if (!['cards', 'table'].includes(result.view)) result.view = 'cards';
    if (!['newest', 'oldest', 'name'].includes(result.sort)) result.sort = 'newest';
    result.q = typeof result.q === 'string' ? result.q.slice(0, 500) : '';
    result.year = /^\d{4}$/.test(String(result.year)) ? String(result.year) : 'all';
    result.favorites = result.favorites === true || result.favorites === '1' || result.favorites === 'true';
    return result;
  }

  function stateFromUrl() {
    const params = new URLSearchParams(location.search);
    const next = { ...defaults };
    Object.keys(defaults).forEach(key => { if (params.has(key)) next[key] = params.get(key); });
    return normalizeState(next);
  }

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, favorites: [...favorites] })); } catch { /* Private mode/file:// may disable storage. */ }
  }

  function syncUrl(replace = false) {
    const url = new URL(location.href);
    Object.keys(defaults).forEach(key => url.searchParams.delete(key));
    Object.entries(state).forEach(([key, value]) => {
      if (key === 'collection' || key === 'category' || value !== defaults[key]) url.searchParams.set(key, typeof value === 'boolean' ? (value ? '1' : '0') : value);
    });
    try { history[replace ? 'replaceState' : 'pushState'](null, '', url); } catch { /* Local file browsing can restrict history. */ }
  }

  function setFilter(key, value, replace = false) {
    if (!Object.hasOwn(defaults, key)) return;
    state = normalizeState({ ...state, [key]: value });
    syncUrl(replace);
    persist();
    render();
  }

  function getFiltered() {
    const words = state.q.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const result = records.filter(record => {
      if (record.collection !== state.collection) return false;
      if (state.category !== 'all' && !cameras(record).includes(state.category)) return false;
      if (state.year !== 'all' && String(record.year) !== state.year) return false;
      if (state.scale !== 'all' && scaleValue(record) !== state.scale) return false;
      if (state.code !== 'all' && codeStatus(record) !== state.code) return false;
      if (state.favorites && !favorites.has(String(record.id))) return false;
      return words.every(word => (/^[a-z0-9]{1,2}$/.test(word) ? shortSearchIndex : searchIndex).get(String(record.id)).includes(word));
    });
    result.sort((a, b) => {
      if (state.sort === 'name') return methodName(a).localeCompare(methodName(b), 'en');
      const yearDifference = (Number(a.year) || 0) - (Number(b.year) || 0);
      return (state.sort === 'oldest' ? yearDifference : -yearDifference) || methodName(a).localeCompare(methodName(b), 'en');
    });
    return result;
  }

  function render() {
    filtered = getFiltered();
    const category = categoryMap.get(state.category);
    const collectionRecords = records.filter(record => record.collection === state.collection);
    $('depth-count').textContent = String(records.filter(record => record.collection === 'depth').length);
    $('slam-count').textContent = String(records.filter(record => record.collection === 'slam').length);
    $('source-count').textContent = String(records.length);
    $('updated-date').textContent = catalog.updated || '待更新';
    document.querySelectorAll('[data-collection]').forEach(button => {
      const active = button.dataset.collection === state.collection;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $('collection-kicker').textContent = state.collection === 'depth' ? 'DEPTH COLLECTION' : 'SLAM & ODOMETRY COLLECTION';
    $('category-title').replaceChildren(document.createTextNode(category.id === 'all' ? category[state.collection] : category.title), el('span', '', category.id === 'all' ? '全部文献' : category[state.collection]));
    $('category-description').textContent = state.collection === 'slam' && category.id === 'panoramic' ? '关注全景视觉的位姿、轨迹与地图，核查尺度来源、IMU 和回环能力。' : category.description;
    $('category-nav').replaceChildren(...categories.map(item => {
      const count = collectionRecords.filter(record => item.id === 'all' || cameras(record).includes(item.id)).length;
      const button = el('button', `category-button${item.id === state.category ? ' active' : ''}`);
      button.type = 'button';
      button.dataset.category = item.id;
      button.setAttribute('aria-current', item.id === state.category ? 'true' : 'false');
      const label = el('span', 'category-label', item.title);
      label.append(el('small', '', item.zh));
      button.append(el('span', 'category-icon', item.icon), label, el('span', 'category-count', count));
      button.addEventListener('click', () => setFilter('category', item.id));
      return button;
    }));
    const years = [...new Set(collectionRecords.map(record => String(record.year)).filter(year => /^\d{4}$/.test(year)))].sort().reverse();
    if (state.year !== 'all' && !years.includes(state.year)) years.push(state.year);
    $('year-filter').replaceChildren(new Option('全部年份', 'all'), ...years.map(year => new Option(year, year)));
    $('year-filter').value = state.year;
    $('scale-filter').value = state.scale;
    $('code-filter').value = state.code;
    $('sort-select').value = state.sort;
    if ($('search').value !== state.q) $('search').value = state.q;
    $('favorites-filter').setAttribute('aria-pressed', String(state.favorites));
    $('favorites-count').textContent = String(favorites.size);
    $('result-count').textContent = String(filtered.length);
    $('result-description').textContent = `集合共 ${collectionRecords.length} 篇`;
    document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === state.view)));
    const activeCount = Number(state.category !== 'all') + Number(Boolean(state.q)) + Number(state.year !== 'all') + Number(state.scale !== 'all') + Number(state.code !== 'all') + Number(state.favorites);
    $('mobile-filter-count').textContent = `${activeCount} 项已选`;
    renderFilterChips();
    const container = $('results');
    container.className = state.view === 'cards' ? 'results-grid' : 'results-table-wrap';
    container.replaceChildren(...(state.view === 'cards' ? filtered.map(renderCard) : filtered.length ? [renderTable(filtered)] : []));
    container.hidden = !filtered.length;
    container.setAttribute('aria-busy', 'false');
    $('empty-state').hidden = Boolean(filtered.length);
    if (!records.length) {
      $('empty-state').querySelector('h3').textContent = '文献数据尚未载入';
      $('empty-state').querySelector('p').textContent = '请检查 data/catalog.js 是否存在并正确加载，然后刷新页面。';
    }
    renderCompareBar();
    persist();
  }

  function renderFilterChips() {
    const chips = [];
    const chip = (key, label, empty) => {
      const button = el('button', 'filter-chip');
      button.type = 'button';
      button.setAttribute('aria-label', `移除筛选：${label}`);
      button.append(el('span', '', label), el('span', '', '×'));
      button.addEventListener('click', () => setFilter(key, empty));
      chips.push(button);
    };
    if (state.q) chip('q', `关键词：${state.q}`, '');
    if (state.year !== 'all') chip('year', state.year, 'all');
    if (state.scale !== 'all') chip('scale', scales[state.scale], 'all');
    if (state.code !== 'all') chip('code', codes[state.code], 'all');
    if (state.favorites) chip('favorites', '我的阅读收藏', false);
    $('active-filters').replaceChildren(...chips);
  }

  function badge(label, className = '') { return el('span', `badge ${className}`, label); }

  function sourceLink(label, url, className = 'card-link') {
    const validUrl = safeUrl(url);
    const node = el(validUrl ? 'a' : 'span', `${className}${validUrl ? '' : ' unavailable'}`, label);
    if (validUrl) { node.href = validUrl; node.target = '_blank'; node.rel = 'noopener noreferrer'; }
    else { node.setAttribute('aria-disabled', 'true'); node.title = '尚未核实公开链接'; }
    return node;
  }

  function makeFavorite(record, className) {
    const button = el('button', className, favorites.has(String(record.id)) ? '★' : '☆');
    button.type = 'button';
    button.dataset.favoriteId = String(record.id);
    button.setAttribute('aria-pressed', String(favorites.has(String(record.id))));
    button.setAttribute('aria-label', `${favorites.has(String(record.id)) ? '取消收藏' : '收藏'} ${methodName(record)}`);
    button.title = '本机阅读收藏';
    button.addEventListener('click', () => toggleFavorite(record));
    return button;
  }

  function toggleFavorite(record) {
    const id = String(record.id);
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    persist();
    if (state.favorites) render();
    else {
      $('favorites-count').textContent = String(favorites.size);
      document.querySelectorAll('[data-favorite-id]').forEach(button => {
        if (button.dataset.favoriteId !== id) return;
        const active = favorites.has(id);
        button.textContent = active ? '★' : '☆';
        button.setAttribute('aria-pressed', String(active));
        button.setAttribute('aria-label', `${active ? '取消收藏' : '收藏'} ${methodName(record)}`);
      });
    }
    if (currentDetailId === id && $('detail-dialog').open) updateDetailActions(record);
  }

  function compareCheckbox(record) {
    const label = el('label', 'compare-check');
    const input = el('input');
    input.type = 'checkbox';
    input.checked = selected.has(String(record.id));
    input.dataset.compareId = String(record.id);
    input.setAttribute('aria-label', `比较 ${methodName(record)}`);
    input.addEventListener('change', () => toggleCompare(record));
    label.append(input, document.createTextNode('对比'));
    return label;
  }

  function renderCard(record) {
    const article = el('article', `paper-card${selected.has(String(record.id)) ? ' selected' : ''}`);
    article.dataset.recordId = String(record.id);
    const art = el('div', 'card-art');
    art.append(makeArt(record), makeFavorite(record, 'favorite-button'));
    const caption = el('div', 'art-caption');
    caption.append(el('span', '', record.collection === 'slam' ? 'POSE · TRAJECTORY · MAPPING' : cameras(record).includes('panoramic') ? 'SPHERICAL DEPTH GEOMETRY' : cameras(record).includes('fisheye') ? 'FISHEYE DEPTH GEOMETRY' : 'CAMERA DEPTH GEOMETRY'), el('span', '', '几何示意'));
    art.append(caption);
    const body = el('div', 'card-body');
    const meta = el('div', 'card-meta');
    meta.append(el('span', 'year-badge', record.year || '—'), el('span', 'venue-label', record.venue || 'Venue 待核实'));
    const title = el('button', 'paper-title-button', methodName(record));
    title.type = 'button';
    title.addEventListener('click', () => openRecord(record.id));
    const titleHeading = el('h3', 'card-heading');
    titleHeading.append(title);
    body.append(meta, titleHeading, el('p', 'paper-full-title', record.title || record.name), el('p', 'card-summary', record.summary || '查看论文详情、输入输出与证据链接。'));
    const badges = el('div', 'badge-row');
    const cameraTags = cameras(record).slice(0, 2).map(camera => badge(cameraLabels[camera] || camera));
    badges.append(...cameraTags, badge(shortScales[scaleValue(record)], `scale-${scaleValue(record)}`));
    if (record.depthType && !['none', 'unknown'].includes(record.depthType)) badges.append(badge(({ range: 'Range', z: 'Z-depth', inverse: 'Inverse', points: '3D points', mixed: 'Mixed depth' })[record.depthType] || record.depthType, 'depth-badge'));
    body.append(badges);
    const footer = el('div', 'card-footer');
    const links = el('div', 'card-links');
    const codeLabel = codeStatus(record) === 'none' ? 'Repo ↗' : codeStatus(record) === 'unverified' ? 'Source ↗' : 'Code ↗';
    links.append(sourceLink('Paper ↗', record.paperUrl), sourceLink(codeLabel, record.codeUrl));
    footer.append(links, compareCheckbox(record));
    body.append(footer);
    const status = el('div', 'code-status');
    const statusText = el('span');
    statusText.append(el('i', `status-dot ${codeStatus(record)}`), document.createTextNode(codes[codeStatus(record)]));
    const details = el('button', 'card-detail-trigger', '方法详情 ↗');
    details.type = 'button';
    details.addEventListener('click', () => openRecord(record.id));
    status.append(statusText, details);
    article.append(art, body, status);
    return article;
  }

  function makeArt(record) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 300 130');
    svg.setAttribute('aria-hidden', 'true');
    const seed = [...String(record.id)].reduce((value, char) => value + char.charCodeAt(0), 0);
    const variant = seed % 4;
    const stroke = ['#4e8c87', '#668c9a', '#7c9875', '#6e8d9f'][variant];
    const bg = ['#e8eee5', '#e7efed', '#e9eee1', '#e8edef'][variant];
    const add = (tag, attrs, parent = svg) => {
      const node = document.createElementNS(ns, tag);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
      parent.append(node); return node;
    };
    add('rect', { width: 300, height: 130, fill: bg });
    for (let i = 0; i < 8; i += 1) add('path', { d: `M${-50 + i * 52} 130 150 20 ${350 - i * 24} 130`, fill: 'none', stroke, 'stroke-width': .5, opacity: .11 });
    add('ellipse', { cx: 150, cy: 111, rx: 84, ry: 9, fill: stroke, opacity: .07 });
    if (record.collection === 'slam') {
      const points = [[66, 87], [99, 71], [125, 75], [158, 55], [190, 65], [222, 35]];
      add('path', { d: 'M42 101 73 39 146 24 244 40 265 95Z', fill: 'none', stroke, 'stroke-width': .7, 'stroke-dasharray': '2 4', opacity: .35 });
      add('path', { d: points.map((point, index) => `${index ? 'L' : 'M'}${point.join(' ')}`).join(' '), fill: 'none', stroke, 'stroke-width': 2, 'stroke-linejoin': 'round' });
      add('path', { d: 'M66 87Q155 122 222 35', fill: 'none', stroke: '#bc9a58', 'stroke-width': .9, 'stroke-dasharray': '3 4' });
      points.forEach(([x, y], index) => {
        add('path', { d: `m${x - 8} ${y - 12} 16 0 -8 14Z`, fill: '#f8fbf4', stroke, 'stroke-width': .8 });
        add('circle', { cx: x, cy: y, r: index === points.length - 1 ? 3.5 : 2.2, fill: index === points.length - 1 ? '#b88a45' : stroke });
      });
      [[81, 40], [112, 29], [162, 33], [202, 21], [251, 65], [141, 106], [231, 104]].forEach(([x, y]) => add('circle', { cx: x, cy: y, r: 1.5, fill: stroke, opacity: .45 }));
    } else if (cameras(record).includes('panoramic')) {
      add('path', { d: 'm57 47 69-12 67 2 48 16-8 41-57 13-65-4-60-16Z', fill: stroke, opacity: .045 });
      add('ellipse', { cx: 150, cy: 65, rx: 83, ry: 40, fill: '#f6f9f0', stroke, 'stroke-width': 1 });
      for (const ry of [13, 28]) add('ellipse', { cx: 150, cy: 65, rx: 83, ry, fill: 'none', stroke, 'stroke-width': .6, opacity: .6 });
      for (const rx of [30, 59]) add('ellipse', { cx: 150, cy: 65, rx, ry: 40, fill: 'none', stroke, 'stroke-width': .65, opacity: .7 });
      add('path', { d: 'M67 65h166M150 25v80', fill: 'none', stroke, 'stroke-width': .7, opacity: .8 });
      add('path', { d: 'm72 77 24-10 22 13 23-24 26 19 21-13 36 19', fill: 'none', stroke, 'stroke-width': 1.8, opacity: .65 });
      add('path', { d: 'M54 64c0-34 192-34 192 0', fill: 'none', stroke: '#ba9656', 'stroke-width': .8, 'stroke-dasharray': '3 3' });
      add('path', { d: 'm242 60 4 4 3-4', fill: 'none', stroke: '#ba9656', 'stroke-width': .9 });
      add('circle', { cx: 150, cy: 65, r: 3, fill: '#b58b4d', stroke: '#fffef5', 'stroke-width': 1.5 });
    } else if (cameras(record).includes('fisheye')) {
      add('circle', { cx: 150, cy: 64, r: 45, fill: '#f5f9f1', stroke, 'stroke-width': 1 });
      for (const rx of [15, 31]) add('ellipse', { cx: 150, cy: 64, rx, ry: 45, fill: 'none', stroke, 'stroke-width': .6, opacity: .65 });
      for (const ry of [15, 31]) add('ellipse', { cx: 150, cy: 64, rx: 45, ry, fill: 'none', stroke, 'stroke-width': .6, opacity: .65 });
      add('path', { d: 'm111 84 20-14 15 8 19-27 18 21', fill: 'none', stroke, 'stroke-width': 1.7 });
      add('path', { d: 'M84 65a66 48 0 0 1 132 0', fill: 'none', stroke: '#b99860', 'stroke-width': .8, 'stroke-dasharray': '3 3' });
      add('circle', { cx: 150, cy: 64, r: 3, fill: '#b68d4d', stroke: '#fffef5', 'stroke-width': 1.5 });
      add('path', { d: 'm67 83 38-19M233 83l-38-19', stroke, 'stroke-width': .7, opacity: .5 });
    } else {
      add('path', { d: 'm110 69 77-43 50 21v49l-50 14Z', fill: '#f6f9f1', stroke, 'stroke-width': .8 });
      for (let i = 1; i < 5; i += 1) add('path', { d: `M${187 + i * 10} ${26 + i * 4.2}v64M${187} ${26 + i * 16}l50 ${21 - i * 1.4}`, stroke, fill: 'none', opacity: .4, 'stroke-width': .6 });
      add('path', { d: 'm112 69 75 41V26Z', fill: stroke, opacity: .05 });
      add('rect', { x: 74, y: 56, width: 31, height: 25, rx: 4, fill: stroke, opacity: .85 });
      add('path', { d: 'm105 62 12-6v25l-12-6', fill: stroke, opacity: .85 });
      add('circle', { cx: 85, cy: 68, r: 7, fill: '#f4f8ed' });
      add('circle', { cx: 85, cy: 68, r: 3.5, fill: stroke });
    }
    add('path', { d: 'M16 15h11M16 15v10M284 105h-11M284 105V95', fill: 'none', stroke, 'stroke-width': .7, opacity: .4 });
    return svg;
  }

  function renderTable(items) {
    const table = el('table', 'results-table');
    const thead = el('thead');
    const headRow = el('tr');
    ['方法 / Method', '年份', '相机', '尺度 / 深度', '代码', '阅读 / 对比'].forEach(label => { const th = el('th', '', label); th.scope = 'col'; headRow.append(th); });
    thead.append(headRow);
    const tbody = el('tbody');
    items.forEach(record => {
      const row = el('tr', selected.has(String(record.id)) ? 'selected' : '');
      row.dataset.recordId = String(record.id);
      const nameCell = el('td');
      const button = el('button', 'table-title', methodName(record));
      button.type = 'button'; button.addEventListener('click', () => openRecord(record.id));
      nameCell.append(button, el('span', 'table-subtitle', record.title));
      const scaleCell = el('td'); scaleCell.append(badge(shortScales[scaleValue(record)], `scale-${scaleValue(record)}`), el('span', 'table-subtitle', depthTypes[record.depthType] || '待核实'));
      const codeCell = el('td'); codeCell.append(sourceLink(codes[codeStatus(record)] + (safeUrl(record.codeUrl) ? ' ↗' : ''), record.codeUrl));
      const actionsCell = el('td'); const actions = el('div', 'table-actions'); actions.append(makeFavorite(record, 'table-favorite'), compareCheckbox(record)); actionsCell.append(actions);
      row.append(nameCell, el('td', 'table-year', record.year || '—'), el('td', '', cameras(record).map(camera => cameraLabels[camera] || camera).join(' · ')), scaleCell, codeCell, actionsCell);
      tbody.append(row);
    });
    table.append(thead, tbody);
    return table;
  }

  function toggleCompare(record) {
    const id = String(record.id);
    if (selected.has(id)) selected.delete(id);
    else if (selected.size < 4) selected.add(id);
    else toast('最多同时比较 4 个方法，请先取消一个已选方法。');
    document.querySelectorAll('[data-compare-id]').forEach(input => { input.checked = selected.has(input.dataset.compareId); });
    document.querySelectorAll('[data-record-id]').forEach(node => node.classList.toggle('selected', selected.has(node.dataset.recordId)));
    renderCompareBar();
    if (currentDetailId === id && $('detail-dialog').open) updateDetailActions(record);
  }

  function renderCompareBar() {
    $('compare-bar').hidden = !selected.size;
    $('compare-selection-count').textContent = `${selected.size} / 4`;
    $('compare-selection-names').textContent = [...selected].map(id => methodName(byId.get(id))).join(' · ');
    document.body.style.paddingBottom = selected.size ? '75px' : '';
  }

  function clearCompare() {
    selected.clear();
    render();
    if (currentDetailId && $('detail-dialog').open) updateDetailActions(byId.get(currentDetailId));
  }

  function showDialog(id) {
    lastDialogFocus = document.activeElement;
    const dialog = $(id);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('dialog-open');
    const close = dialog.querySelector('.dialog-close');
    if (close) close.focus();
  }

  function closeDialog(id) { $(id).close(); }

  function detailSection(title, label, value, fallback = '待核实') {
    const section = el('section', 'detail-section');
    const heading = el('h3', '', title); heading.append(el('span', '', label)); section.append(heading);
    if (value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length) {
      const dl = el('dl');
      Object.entries(value).forEach(([key, item]) => dl.append(el('dt', '', key), el('dd', isUnknown(item) ? 'unknown-value' : '', text(item))));
      section.append(dl);
    } else section.append(el('p', isUnknown(value) ? 'unknown-value' : '', isUnknown(value) ? fallback : text(value)));
    return section;
  }

  function openRecord(id) {
    const record = byId.get(String(id));
    if (!record) return;
    currentDetailId = String(id);
    const header = el('div', 'dialog-header');
    const heading = el('div');
    heading.append(el('div', 'eyebrow', `${record.collection === 'slam' ? 'SLAM & ODOMETRY' : 'DEPTH ESTIMATION'} / ${record.year || 'YEAR UNKNOWN'}`));
    const title = el('h2', '', methodName(record)); title.id = 'detail-title';
    heading.append(title, el('p', '', record.title || record.name));
    const close = el('button', 'dialog-close', '×'); close.type = 'button'; close.setAttribute('aria-label', '关闭文献详情'); close.addEventListener('click', () => closeDialog('detail-dialog'));
    header.append(heading, close);
    const body = el('div', 'dialog-body');
    const meta = el('div', 'detail-meta');
    meta.append(...cameras(record).map(camera => badge(cameraLabels[camera] || camera)), badge(scales[scaleValue(record)], `scale-${scaleValue(record)}`), badge(depthTypes[record.depthType] || '深度定义待核实', 'depth-badge'), badge(record.venue || 'Venue 待核实'));
    body.append(meta, el('p', 'detail-summary', record.summary || '暂无研究摘要。'));
    const sources = el('div', 'detail-sources');
    const releaseLabel = ['none', 'unverified'].includes(codeStatus(record)) ? '发布入口 / Repository' : '源码 / Code';
    [['论文 / Paper', record.paperUrl], [releaseLabel, record.codeUrl], ['项目 / Project', record.projectUrl], ['权重 / Weights', record.weightsUrl]].forEach(([label, url]) => sources.append(sourceLink(label + (safeUrl(url) ? ' ↗' : ''), url, 'source-link')));
    body.append(sources);
    const io = el('div', 'detail-two-column');
    const input = detailSection('模型输入', 'INPUT', record.inputSummary, '输入摘要待核实');
    if (record.inputs && typeof record.inputs === 'object' && Object.keys(record.inputs).length) appendFields(input, record.inputs);
    const output = detailSection('模型输出', 'OUTPUT', record.outputSummary, '输出摘要待核实');
    if (record.outputDetails && typeof record.outputDetails === 'object' && Object.keys(record.outputDetails).length) appendFields(output, record.outputDetails);
    else if (asList(record.outputs).length) output.append(el('p', '', `输出项：${text(record.outputs)}`));
    io.append(input, output); body.append(io);
    const system = {
      '尺度来源 / 条件': record.scaleNote || record.metricStatus || '待核实',
      '深度定义': depthTypes[record.depthType] || record.depthType || '待核实',
      '位姿输出': record.pose === true ? '是' : record.pose === false ? '否' : '待核实',
      '原生全景支持': record.nativePanoramic === true ? '是' : record.nativePanoramic === false ? '否；参见输入假设' : '待核实',
      '方法族': record.family || '待核实',
      '代码状态': codes[codeStatus(record)],
      '许可': record.license || '待核实',
      '验证范围': record.verificationLevel || '来源证据整理；未在本机运行模型',
      '来源核查日期': record.sourceChecked || catalog.updated || '待核实'
    };
    if (record.metricStatus && record.scaleNote && record.metricStatus !== record.scaleNote) system['尺度详细状态'] = record.metricStatus;
    if (record.collection === 'slam' || record.imu !== undefined) system['IMU / 惯性信息'] = record.imu ?? '待核实';
    if (record.collection === 'slam' || record.loopClosure !== undefined) system['回环检测'] = record.loopClosure ?? '待核实';
    body.append(detailSection('几何、尺度与复现条件', 'RESEARCH CHECKS', system));
    body.append(detailSection('源码入口与环境', 'REPRODUCTION', { '源码入口': record.codeEntry ?? '待核实', '运行环境': record.environment ?? '待核实' }));
    if (asList(record.authors).length || asList(record.institutions).length) body.append(detailSection('论文信息', 'PUBLICATION', { '作者': text(record.authors), '机构': text(record.institutions), '发表信息': record.venue || '待核实', '展示年份': record.year, '原始记录年份': record.firstYear ?? record.year, '年份口径': record.yearConvention || '见发表与版本说明' }));
    if (asList(record.notes).length) {
      const notes = detailSection('研究笔记与未知项', 'NOTES', null);
      notes.querySelector('p').remove();
      const list = el('ul'); asList(record.notes).forEach(note => list.append(el('li', '', text(note)))); notes.append(list); body.append(notes);
    }
    if (asList(record.tags).length) body.append(detailSection('检索关键词', 'TAGS', asList(record.tags).join(' · ')));
    const evidence = detailSection('证据与来源', 'EVIDENCE', null);
    evidence.querySelector('p').remove();
    const list = el('ol', 'evidence-list');
    asList(record.evidence).forEach(item => {
      const li = el('li');
      if (typeof item === 'string') {
        if (safeUrl(item)) li.append(sourceLink(item, item, 'evidence-link'));
        else li.textContent = item;
      } else if (item && typeof item === 'object') {
        const url = item.url || item.sourceUrl || item.link || (safeUrl(item.source) ? item.source : null);
        const claim = item.claim || item.title || item.label || item.field || item.description || item.note || '原始来源';
        li.append(sourceLink(text(claim) + (safeUrl(url) ? ' ↗' : ''), url, 'evidence-link'));
        const description = item.quote || item.note || item.detail || item.excerpt || (item.description !== claim ? item.description : null);
        if (description) li.append(el('span', 'evidence-description', text(description)));
        if (item.checked || item.accessed || item.verifiedAt) li.append(el('span', 'evidence-description', `核查日期：${text(item.checked || item.accessed || item.verifiedAt)}`));
      }
      list.append(li);
    });
    if (list.children.length) evidence.append(list);
    else evidence.append(el('p', 'unknown-value', '逐项证据待补充。请先查看上方论文与官方源码链接。'));
    body.append(evidence);
    const bottom = el('div', 'detail-bottom');
    bottom.append(el('span', '', '输入形状、单位及支持范围以对应版本的原文与官方实现为准。'), el('div'));
    bottom.lastElementChild.id = 'detail-actions';
    body.append(bottom);
    $('detail-content').replaceChildren(header, body);
    updateDetailActions(record);
    showDialog('detail-dialog');
  }

  function appendFields(section, fields) {
    const dl = el('dl');
    Object.entries(fields).forEach(([key, item]) => dl.append(el('dt', '', key), el('dd', isUnknown(item) ? 'unknown-value' : '', text(item))));
    section.append(dl);
  }

  function updateDetailActions(record) {
    const actions = $('detail-actions');
    if (!actions || !record) return;
    const favorite = el('button', 'button button-secondary', favorites.has(String(record.id)) ? '★ 已收藏' : '☆ 加入阅读收藏');
    favorite.type = 'button'; favorite.setAttribute('aria-pressed', String(favorites.has(String(record.id)))); favorite.addEventListener('click', () => toggleFavorite(record));
    const compare = el('button', 'button button-primary', selected.has(String(record.id)) ? '✓ 已加入对比' : '+ 加入对比');
    compare.type = 'button'; compare.setAttribute('aria-pressed', String(selected.has(String(record.id)))); compare.addEventListener('click', () => toggleCompare(record));
    actions.replaceChildren(favorite, compare);
  }

  function openCompare() {
    if (!selected.size) return;
    const items = [...selected].map(id => byId.get(id));
    const table = el('table', 'compare-table');
    const thead = el('thead'); const top = el('tr'); top.append(el('th', '', 'METHOD'));
    items.forEach(record => top.append(el('th', '', methodName(record)))); thead.append(top);
    const tbody = el('tbody');
    const rows = [
      ['年份 / 发表', record => `${record.year || '待核实'} · ${record.venue || '待核实'}`],
      ['相机模型', record => cameras(record).map(camera => cameraLabels[camera] || camera).join(' · ')],
      ['模型输入', record => record.inputSummary || '待核实'],
      ['输入规格', record => text(record.inputs)],
      ['模型输出', record => record.outputSummary || text(record.outputs)],
      ['输出规格', record => text(record.outputDetails)],
      ['尺度', record => `${scales[scaleValue(record)]}\n${text(record.scaleNote || record.metricStatus || '尺度条件待核实')}`],
      ['深度定义', record => depthTypes[record.depthType] || '待核实'],
      ['原生全景', record => record.nativePanoramic === true ? '是' : record.nativePanoramic === false ? '否' : '待核实'],
      ['位姿输出', record => record.pose === true ? '是' : record.pose === false ? '否' : '待核实'],
      ['方法族', record => record.family || '待核实'],
      ['IMU', record => text(record.imu)],
      ['回环', record => text(record.loopClosure)],
      ['代码 / 许可', record => `${codes[codeStatus(record)]}\n${text(record.license || '许可待核实')}`],
      ['验证范围', record => record.verificationLevel || '来源证据整理；未在本机运行模型'],
      ['研究笔记', record => text(record.notes)]
    ];
    rows.forEach(([label, getter]) => { const row = el('tr'); const heading = el('th', '', label); heading.scope = 'row'; row.append(heading); items.forEach(record => row.append(el('td', '', text(getter(record))))); tbody.append(row); });
    const links = el('tr'); links.append(el('th', '', '官方来源'));
    items.forEach(record => { const cell = el('td'); cell.append(sourceLink('Paper ↗', record.paperUrl, 'compare-link'), sourceLink('Code ↗', record.codeUrl, 'compare-link'), sourceLink('Project ↗', record.projectUrl, 'compare-link')); links.append(cell); });
    tbody.append(links); table.append(thead, tbody); $('compare-content').replaceChildren(table);
    showDialog('compare-dialog');
  }

  function resetFilters() {
    state = { ...defaults, collection: state.collection, category: 'all', view: state.view };
    syncUrl(); persist(); render();
  }

  function toast(message) {
    $('toast').textContent = message;
    $('toast').hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3500);
  }

  function exportRecords(format) {
    const items = getFiltered();
    if (!items.length) { toast('当前筛选没有可导出的文献。'); return; }
    let content, type, extension;
    if (format === 'json') {
      content = JSON.stringify({ title: 'Panoramic Depth Atlas', updated: catalog.updated, exported: new Date().toISOString(), filters: state, records: items }, null, 2);
      type = 'application/json;charset=utf-8'; extension = 'json';
    } else if (format === 'csv') {
      const fields = ['id', 'collection', 'name', 'title', 'year', 'venue', 'authors', 'institutions', 'cameras', 'scale', 'scaleNote', 'metricStatus', 'depthType', 'inputSummary', 'outputSummary', 'inputs', 'outputDetails', 'pose', 'nativePanoramic', 'family', 'imu', 'loopClosure', 'codeStatus', 'license', 'paperUrl', 'codeUrl', 'projectUrl', 'weightsUrl', 'verificationLevel', 'sourceChecked', 'evidence', 'notes'];
      const cell = value => { let string = value === undefined || value === null ? '' : text(value); if (/^[=+\-@\t\r]/.test(string)) string = `'${string}`; return `"${string.replace(/"/g, '""')}"`; };
      content = '\uFEFF' + [fields.join(','), ...items.map(record => fields.map(field => cell(record[field])).join(','))].join('\r\n');
      type = 'text/csv;charset=utf-8'; extension = 'csv';
    } else if (format === 'bib' || format === 'bibtex') {
      const escape = value => text(value).replace(/\\/g, '\\textbackslash{}').replace(/[{}]/g, match => `\\${match}`).replace(/[%&#_$]/g, match => `\\${match}`).replace(/\n/g, ' ');
      content = '% Atlas-generated reading-list draft. Verify authors and publication details before citing.\n\n' + items.map(record => {
        const key = String(record.id).replace(/[^a-zA-Z0-9:_-]/g, '') || 'atlasEntry';
        const authorNames = asList(record.authors).flatMap(author => {
          const name = typeof author === 'object' && author ? author.name || '' : String(author);
          return name.split(/[;；]/).map(part => part.trim()).filter(part => part && !/^(?:unknown|unverified|n\/a|待核实|未核实|未知)(?:$|\b|[（(])/i.test(part));
        });
        const authors = authorNames.join(' and ');
        const fields = [['title', record.title || record.name], ['author', authors], ['year', record.year], ['howpublished', record.venue], ['url', safeUrl(record.paperUrl)], ['note', `Atlas-generated draft; verify publication metadata. Method: ${methodName(record)}.`]].filter(([, value]) => value);
        return `@misc{${key},\n${fields.map(([name, value]) => `  ${name} = {${escape(value)}}`).join(',\n')}\n}`;
      }).join('\n\n');
      type = 'application/x-bibtex;charset=utf-8'; extension = 'bib';
    } else return;
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob); const link = el('a');
    link.href = url; link.download = `panoramic-atlas-${state.collection}-${state.category}-${catalog.updated || 'collection'}.${extension}`;
    document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('export-menu').hidden = true; $('export-button').setAttribute('aria-expanded', 'false');
    toast(`已导出 ${items.length} 篇文献 · ${extension.toUpperCase()}`);
    return content;
  }

  document.querySelectorAll('[data-collection]').forEach(button => {
    button.addEventListener('click', () => setFilter('collection', button.dataset.collection));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); const next = event.key === 'Home' ? 'depth' : event.key === 'End' ? 'slam' : state.collection === 'depth' ? 'slam' : 'depth';
      setFilter('collection', next); $(`tab-${next}`).focus();
    });
  });
  $('search').addEventListener('input', event => setFilter('q', event.target.value, true));
  [['year-filter', 'year'], ['scale-filter', 'scale'], ['code-filter', 'code'], ['sort-select', 'sort']].forEach(([id, key]) => $(id).addEventListener('change', event => setFilter(key, event.target.value)));
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setFilter('view', button.dataset.view)));
  $('favorites-filter').addEventListener('click', () => setFilter('favorites', !state.favorites));
  $('reset-filters').addEventListener('click', resetFilters);
  $('empty-reset').addEventListener('click', resetFilters);
  $('mobile-filters').addEventListener('click', () => { const open = $('sidebar').classList.toggle('open'); $('mobile-filters').setAttribute('aria-expanded', String(open)); });
  $('clear-compare').addEventListener('click', clearCompare);
  $('open-compare').addEventListener('click', openCompare);
  $('export-button').addEventListener('click', () => { const menu = $('export-menu'); menu.hidden = !menu.hidden; $('export-button').setAttribute('aria-expanded', String(!menu.hidden)); });
  document.querySelectorAll('[data-export]').forEach(button => button.addEventListener('click', () => exportRecords(button.dataset.export)));
  document.addEventListener('click', event => { if (!$('export-menu').contains(event.target) && !$('export-button').contains(event.target)) { $('export-menu').hidden = true; $('export-button').setAttribute('aria-expanded', 'false'); } });
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(button.dataset.close)));
  ['detail-dialog', 'compare-dialog'].forEach(id => {
    const dialog = $(id);
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
    dialog.addEventListener('close', () => {
      if (id === 'detail-dialog') currentDetailId = null;
      if (!document.querySelector('dialog[open]')) { document.body.classList.remove('dialog-open'); if (lastDialogFocus && document.contains(lastDialogFocus)) lastDialogFocus.focus(); }
    });
  });
  document.addEventListener('keydown', event => {
    const editing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '') || document.activeElement?.isContentEditable;
    if (event.key === '/' && !editing && !document.querySelector('dialog[open]') && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); $('search').focus(); }
    if (event.key === 'Escape' && !$('export-menu').hidden) { $('export-menu').hidden = true; $('export-button').setAttribute('aria-expanded', 'false'); $('export-button').focus(); }
  });
  window.addEventListener('popstate', () => { state = stateFromUrl(); render(); });
  const repoUrl = safeUrl(catalog.repoUrl);
  if (repoUrl) ['repo-link', 'footer-repo'].forEach(id => { $(id).href = repoUrl; $(id).hidden = false; });
  window.PanoramicAtlas = Object.freeze({ getState: () => ({ ...state }), getFilteredRecords: () => [...getFiltered()], exportRecords, openRecord, setFilter, getSelectedIds: () => [...selected] });
  render();
  syncUrl(true);
})();
