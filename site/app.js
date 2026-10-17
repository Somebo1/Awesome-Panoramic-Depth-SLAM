/* Panoramic Depth Atlas · dependency-free, buildless research browser. */
(() => {
  'use strict';
  const catalog = window.ATLAS_DATA || {};
  const records = Array.isArray(catalog.records) ? catalog.records : [];
  const byId = new Map(records.map(record => [String(record.id), record]));
  const STORAGE_KEY = 'panoramic-depth-atlas:v1';
  const defaults = { collection: 'depth', category: 'panoramic', q: '', year: 'all', scale: 'all', code: 'all', view: 'cards', sort: 'newest', favorites: false, lang: 'zh' };
  const translations = window.ATLAS_I18N || { ui: { zh: {}, en: {} }, summaries: {}, zhRecords: {} };
  const t = (key, ...args) => { const value = translations.ui[state.lang][key] ?? key; return typeof value === 'function' ? value(...args) : value; };
  const categories = [
    { id: 'all', title: 'All geometries', zh: '全部相机模型', icon: '▦', depth: 'Depth estimation', slam: 'SLAM & odometry', description: '跨相机模型检索方法，比较投影假设、输入输出与复现条件。' },
    { id: 'panoramic', title: 'Panoramic', zh: '全景 · 360°', icon: '◎', depth: '全景深度', slam: '全景定位与建图', description: '以球面与等距柱状投影为核心，检索 360° 场景深度与空间感知研究。' },
    { id: 'fisheye', title: 'Fisheye', zh: '鱼眼相机', icon: '◉', depth: '鱼眼深度', slam: '鱼眼定位与建图', description: '关注鱼眼成像与畸变模型，查看原生鱼眼支持及可复现的输入输出。' },
    { id: 'wide', title: 'Wide-FOV', zh: '广视场相机', icon: '◒', depth: '广视场深度', slam: '广视场定位与建图', description: '查找广视场与跨相机模型方法，区分视场覆盖和原生投影支持。' },
    { id: 'perspective', title: 'Perspective', zh: '透视相机 · 基线', icon: '▱', depth: '透视深度基线', slam: '透视定位与建图', description: '收录有比较价值的透视方法与基础模型，为全景实验建立参照。' },
    { id: 'multi', title: 'Multi-camera', zh: '多相机系统', icon: '◈', depth: '多相机深度', slam: '多相机定位与建图', description: '比较多相机输入、外参假设、融合方式及机器人系统接入条件。' }
  ];
  const categoryMap = new Map(categories.map(category => [category.id, category]));
  const labelTables = {
    zh: {
      scales: { metric:'度量尺度', relative:'相对尺度', mixed:'依配置而定', unknown:'尺度待核实' },
      codes: { released:'代码已发布', partial:'代码部分发布', unverified:'代码状态待核实', none:'未发现公开代码' },
      depths: { range:'径向距离', z:'光轴深度', inverse:'逆深度', points:'三维点', mixed:'依任务或配置而定', unknown:'深度定义待核实', none:'不直接输出深度' },
      cameras: { all:'全部相机模型', panoramic:'全景', fisheye:'鱼眼', wide:'广视场', perspective:'透视相机', multi:'多相机' }
    },
    en: {
      scales: { metric:'Metric', relative:'Relative', mixed:'Mixed scale', unknown:'Scale unverified' },
      codes: { released:'Code released', partial:'Code partially released', unverified:'Code unverified', none:'No public source found' },
      depths: { range:'Radial range', z:'Z-depth', inverse:'Inverse depth', points:'3D points', mixed:'Task/config dependent', unknown:'Depth convention unverified', none:'No direct depth output' },
      cameras: { all:'All geometries', panoramic:'Panoramic', fisheye:'Fisheye', wide:'Wide-FOV', perspective:'Perspective', multi:'Multi-camera' }
    }
  };
  const labelMap = name => new Proxy({}, { get: (_, key) => labelTables[state.lang][name][key], ownKeys: () => Object.keys(labelTables.zh[name]), getOwnPropertyDescriptor: (_, key) => Object.hasOwn(labelTables.zh[name], key) ? { enumerable: true, configurable: true } : undefined });
  const scales = labelMap('scales');
  const shortScales = scales;
  const codes = labelMap('codes');
  const depthTypes = labelMap('depths');
  const cameraLabels = labelMap('cameras');
  const $ = id => document.getElementById(id);
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined && value !== null) node.textContent = String(value);
    return node;
  };
  const asList = value => Array.isArray(value) ? value : value === undefined || value === null || value === '' ? [] : [value];
  const text = value => {
    if (value === undefined || value === null || value === '') return t('unknown');
    if (value === true) return t('yes');
    if (value === false) return t('no');
    if (Array.isArray(value)) return value.map(text).join(state.lang === 'zh' ? '；' : '; ');
    if (typeof value === 'object') return Object.entries(value).map(([key, val]) => `${fieldLabel(key)}: ${text(val)}`).join('\n');
    if (/^(?:unknown|unverified|n\/a)$/i.test(String(value))) return t('unknown');
    if (/^no$/i.test(String(value))) return t('no');
    if (/^yes$/i.test(String(value))) return t('yes');
    if (/^not applicable$/i.test(String(value))) return t('notApplicable');
    return String(value);
  };
  const sourceText = value => value === undefined || value === null ? '' : typeof value === 'object' ? JSON.stringify(value) : String(value);
  const isUnknown = value => value === undefined || value === null || value === '' || /^(?:unknown|unverified)$/i.test(String(value));
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
  const searchIndex = new Map(records.map(record => [String(record.id), text({ id: record.id, name: record.name, title: record.title, aliases: record.aliases, authors: record.authors, institutions: record.institutions, year: record.year, venue: record.venue, summary: record.summary, englishSummary: translations.summaries[record.id], chineseInterface: translations.zhRecords[record.id], cameras: record.cameras, tags: record.tags, family: record.family, scale: record.scale, scaleNote: record.scaleNote, license: record.license, input: record.inputs, output: record.outputDetails }).toLocaleLowerCase()]));
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
    result.lang = result.lang === 'en' ? 'en' : 'zh';
    return result;
  }

  function stateFromUrl() {
    const params = new URLSearchParams(location.search);
    const next = { ...defaults, lang: state?.lang || stored.state?.lang || 'zh' };
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
      if (key === 'collection' || key === 'category' || key === 'lang' || value !== defaults[key]) url.searchParams.set(key, typeof value === 'boolean' ? (value ? '1' : '0') : value);
    });
    try { history[replace ? 'replaceState' : 'pushState'](null, '', url); } catch { /* Local file browsing can restrict history. */ }
  }

  function setFilter(key, value, replace = false) {
    if (!Object.hasOwn(defaults, key)) return;
    state = normalizeState({ ...state, [key]: value });
    syncUrl(replace);
    persist();
    render();
    if (key === 'lang') {
      if (currentDetailId && $('detail-dialog').open) openRecord(currentDetailId);
      if ($('compare-dialog').open) openCompare();
      window.dispatchEvent(new CustomEvent('atlas:languagechange', { detail: { lang: state.lang } }));
    }
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

  function fieldLabel(key) {
    if (key === 'requirements') return state.lang === 'zh' ? '输入与传感器' : 'Input & sensors';
    const labels = {
      frames:['图像与帧','Images / frames'], projection:['投影模型','Projection'], intrinsics:['相机内参','Intrinsics'], resolution:['分辨率','Resolution'], extrinsics:['相机外参','Extrinsics'], imu:['惯性信息','IMU'], gravity:['重力信息','Gravity'], synchronization:['同步条件','Synchronization'], primary:['主要输出','Primary output'], point_map:['点图','Point map'], normal:['法线','Normals'], confidence:['置信度','Confidence'], camera_parameters:['相机参数','Camera parameters'], depth_convention:['深度定义','Depth convention'], metric_status:['尺度状态','Scale status'], pose_output:['位姿输出','Pose output'], runtime:['运行效率','Runtime'], code:['代码','Code'], weights:['权重','Weights'], input:['模型输入','Input'], output:['模型输出','Output'], notes:['研究笔记','Notes']
    };
    return labels[key]?.[state.lang === 'zh' ? 0 : 1] || key;
  }

  function localizedRecord(record) {
    if (state.lang === 'en') return { ...record, summary: translations.summaries[record.id] || record.summary };
    const reviewed = translations.zhRecords[record.id];
    if (!reviewed) return record;
    const result = { ...record, inputSummary:reviewed[0], outputSummary:reviewed[1], scaleNote:reviewed[2], notes:reviewed[3] };
    const specifications = translations.specifications?.[record.id];
    result.inputs = { ...(specifications?.input || {}) };
    result.outputDetails = { ...(specifications?.output || {}) };
    const common = {
      'Not required':'不需要', 'Not required for single panorama':'单张全景不需要', 'No':'否', 'Unknown':'待核实',
      'No measured gravity required by public interface; training orientation prior may remain':'公开接口无需测得的重力；训练方位先验仍可能存在。',
      'No measured gravity required; gravity-alignment assumptions not audited':'无需测得的重力；尚未审计重力对齐假设。',
      'Single-frame no sensor synchronization requirement; integration with VIO requires timestamps and extrinsics':'单帧推理无需传感器同步；接入视觉惯性系统需要时间戳和外参。',
      'Single panorama; real multi-camera stitching synchronization remains a system concern':'模型使用单张全景；真实多相机拼接仍需处理系统同步。',
      'Unknown; checkpoint/config dependent':'待核实，依赖所选权重或配置。',
      'Checkpoint/config dependent':'依赖所选权重或配置。',
      'Derived geometry only; no direct point-map head verified':'由深度派生几何，未核实直接点图预测头。',
      'No verified direct head':'未核实直接预测头。', 'No verified head':'未核实预测头。',
      'No online SLAM trajectory output verified':'未核实在线定位建图轨迹输出。',
      'No released depth inference camera-pose output verified; depth map alone is not a trajectory':'未核实公开深度推理接口的相机位姿输出；深度图本身不是轨迹。',
      'Unknown: no comparable timing or memory measurement executed locally.':'未在本机测量可比较的运行时间或显存。',
      'Unknown: no comparable public timing/peak-VRAM conditions verified; not measured locally':'未核实可比较的公开时间与峰值显存条件；未在本机测量。'
    };
    for (const [key, value] of Object.entries(record.inputs || {})) if (!Object.hasOwn(result.inputs, key) && Object.hasOwn(common, value)) result.inputs[key] = common[value];
    for (const [key, value] of Object.entries(record.outputDetails || {})) if (!Object.hasOwn(result.outputDetails, key) && Object.hasOwn(common, value)) result.outputDetails[key] = common[value];
    // Preserve exact technical tensor and resolution tokens without exposing
    // a second-language paragraph beside the reviewed Chinese interface.
    const tokens = fields => [...new Set(Object.values(fields || {}).flatMap(value => typeof value === 'string' ? value.match(/(?:[BNTSC]\s*[×x]\s*)?(?:[BNTSC13HW]\s*[×x]\s*)+[BNTSC13HW]|\b\d{2,4}\s*[×x]\s*\d{2,4}\b/g) || [] : []))];
    const inputTokens = tokens(record.inputs), outputTokens = tokens(record.outputDetails);
    if (inputTokens.length) result.inputs['原始张量与分辨率标记'] = inputTokens.join('；');
    if (outputTokens.length) result.outputDetails['原始张量与分辨率标记'] = outputTokens.join('；');
    result.family = translations.families?.[record.family] || (record.collection === 'slam' ? '定位、建图与里程计' : '深度与几何估计');
    result.license = translations.licenses?.[record.id] || record.license;
    result.environment = translations.environments?.[record.id] || t('unknown');
    result.verificationLevel = /partial/i.test(record.verificationLevel || '') ? t('partialReview') : t('sourceReview');
    result.metricStatus = result.scaleNote;
    if (record.imu === 'Optional: required for mono, optional for stereo') result.imu = '单目模式必须使用；双目模式可选';
    if (record.imu === 'Optional: required for VI modes') result.imu = '可选；视觉惯性模式必须使用';
    if (typeof record.loopClosure === 'string' && /Implicit nonlocal/.test(record.loopClosure)) result.loopClosure = '非局部图优化或全局 BA；没有独立地点识别声明';
    result.tags = [];
    result.yearConvention = t('yearConvention');
    return result;
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'zh-CN';
    document.title = state.lang === 'en' ? 'Panoramic Depth Atlas · Depth & SLAM Literature' : '全景深度与定位建图文献图谱';
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('subtitle'));
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === state.lang)));
    document.querySelector('.language-switch')?.setAttribute('aria-label', t('language'));
    document.querySelector('.brand')?.setAttribute('aria-label', t('home'));
    document.querySelector('.collection-strip')?.setAttribute('aria-label', t('allRecords'));
    document.querySelector('.collection-tabs')?.setAttribute('aria-label', t('filters'));
    $('sidebar').setAttribute('aria-label', t('filters'));
    $('category-nav').setAttribute('aria-label', t('camera'));
    $('search').placeholder = t('placeholder');
    document.querySelector('.view-switch')?.setAttribute('aria-label', t('view'));
    document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-label', t(button.dataset.view)));
    $('active-filters').setAttribute('aria-label', t('activeFilters'));
    document.querySelector('[data-close="compare-dialog"]')?.setAttribute('aria-label', t('closeCompare'));
    const options = (id, labels) => [...$(id).options].forEach(option => { option.textContent = labels[option.value] ?? option.textContent; });
    options('scale-filter', { all:t('allScales'), ...labelTables[state.lang].scales });
    options('code-filter', { all:t('allCodes'), released:t('released'), partial:t('partial'), unverified:t('unverified'), none:t('none') });
    options('sort-select', { newest:t('newest'), oldest:t('oldest'), name:t('byName') });
    const heroLabels = document.querySelectorAll('.hero-visual text');
    if (heroLabels[0]) heroLabels[0].textContent = t('fov');
    if (heroLabels[1]) heroLabels[1].textContent = state.lang === 'en' ? 'SPHERICAL' : '球面';
    if (heroLabels[2]) heroLabels[2].textContent = state.lang === 'en' ? 'GEOMETRY' : '几何';
    if (heroLabels[3]) heroLabels[3].textContent = t('illustration');
  }

  function categoryDescription(category) {
    if (state.collection === 'slam' && category.id === 'panoramic') return state.lang === 'zh' ? '关注全景视觉的位姿、轨迹与地图，核查尺度来源、IMU 和回环能力。' : 'Explore panoramic poses, trajectories and maps; check scale sources, inertial requirements and loop closure.';
    if (state.lang === 'zh') return category.description;
    return ({all:'Browse methods across camera models and compare projection assumptions, interfaces and reproduction requirements.',panoramic:'Explore 360° depth and spatial perception based on spherical geometry and equirectangular projection.',fisheye:'Check fisheye imaging, distortion models, native support and reproducible model interfaces.',wide:'Explore wide-FOV and cross-camera methods; distinguish field-of-view coverage from native projection support.',perspective:'Perspective baselines and foundation models provide useful controls for panoramic experiments.',multi:'Compare physical multi-camera inputs, extrinsic calibration, fusion and robot integration requirements.'})[category.id];
  }

  function render() {
    applyLanguage();
    filtered = getFiltered();
    const category = categoryMap.get(state.category);
    const collectionRecords = records.filter(record => record.collection === state.collection);
    $('depth-count').textContent = String(records.filter(record => record.collection === 'depth').length);
    $('slam-count').textContent = String(records.filter(record => record.collection === 'slam').length);
    $('source-count').textContent = String(records.length);
    $('updated-date').textContent = catalog.updated || t('updatePending');
    document.querySelectorAll('[data-collection]').forEach(button => {
      const active = button.dataset.collection === state.collection;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $('collection-kicker').textContent = t(state.collection === 'depth' ? 'collectionDepth' : 'collectionSlam');
    $('category-title').textContent = category.id === 'all' ? t(state.collection) : cameraLabels[category.id];
    $('category-description').textContent = categoryDescription(category);
    $('category-nav').replaceChildren(...categories.map(item => {
      const count = collectionRecords.filter(record => item.id === 'all' || cameras(record).includes(item.id)).length;
      const button = el('button', `category-button${item.id === state.category ? ' active' : ''}`);
      button.type = 'button';
      button.dataset.category = item.id;
      button.setAttribute('aria-current', item.id === state.category ? 'true' : 'false');
      const label = el('span', 'category-label', cameraLabels[item.id]);
      if (item.id === 'panoramic') label.append(el('small', '', '360°'));
      if (item.id === 'perspective') label.append(el('small', '', state.lang === 'zh' ? '对照基线' : 'Reference baselines'));
      label.dataset.focus = t('focus');
      button.append(el('span', 'category-icon', item.icon), label, el('span', 'category-count', count));
      button.addEventListener('click', () => setFilter('category', item.id));
      return button;
    }));
    const years = [...new Set(collectionRecords.map(record => String(record.year)).filter(year => /^\d{4}$/.test(year)))].sort().reverse();
    if (state.year !== 'all' && !years.includes(state.year)) years.push(state.year);
    $('year-filter').replaceChildren(new Option(t('allYears'), 'all'), ...years.map(year => new Option(year, year)));
    $('year-filter').value = state.year;
    $('scale-filter').value = state.scale;
    $('code-filter').value = state.code;
    $('sort-select').value = state.sort;
    if ($('search').value !== state.q) $('search').value = state.q;
    $('favorites-filter').setAttribute('aria-pressed', String(state.favorites));
    $('favorites-count').textContent = String(favorites.size);
    $('result-count').textContent = String(filtered.length);
    $('result-description').textContent = t('resultTotal', collectionRecords.length);
    document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === state.view)));
    const activeCount = Number(state.category !== 'all') + Number(Boolean(state.q)) + Number(state.year !== 'all') + Number(state.scale !== 'all') + Number(state.code !== 'all') + Number(state.favorites);
    $('mobile-filter-count').textContent = t('selected', activeCount);
    renderFilterChips();
    const container = $('results');
    container.className = state.view === 'cards' ? 'results-grid' : 'results-table-wrap';
    container.replaceChildren(...(state.view === 'cards' ? filtered.map(renderCard) : filtered.length ? [renderTable(filtered)] : []));
    container.hidden = !filtered.length;
    container.setAttribute('aria-busy', 'false');
    $('empty-state').hidden = Boolean(filtered.length);
    if (!records.length) {
      $('empty-state').querySelector('h3').textContent = t('missingData');
      $('empty-state').querySelector('p').textContent = t('missingDataTip');
    }
    renderCompareBar();
    persist();
  }

  function renderFilterChips() {
    const chips = [];
    const chip = (key, label, empty) => {
      const button = el('button', 'filter-chip');
      button.type = 'button';
      button.setAttribute('aria-label', t('removeFilter', label));
      button.append(el('span', '', label), el('span', '', '×'));
      button.addEventListener('click', () => setFilter(key, empty));
      chips.push(button);
    };
    if (state.q) chip('q', t('keyword', state.q), '');
    if (state.year !== 'all') chip('year', state.year, 'all');
    if (state.scale !== 'all') chip('scale', scales[state.scale], 'all');
    if (state.code !== 'all') chip('code', codes[state.code], 'all');
    if (state.favorites) chip('favorites', t('favorites'), false);
    $('active-filters').replaceChildren(...chips);
  }

  function badge(label, className = '') { return el('span', `badge ${className}`, label); }

  function sourceLink(label, url, className = 'card-link') {
    const validUrl = safeUrl(url);
    const node = el(validUrl ? 'a' : 'span', `${className}${validUrl ? '' : ' unavailable'}`, label);
    if (validUrl) { node.href = validUrl; node.target = '_blank'; node.rel = 'noopener noreferrer'; }
    else { node.setAttribute('aria-disabled', 'true'); node.title = t('missingLink'); }
    return node;
  }

  function makeFavorite(record, className) {
    const button = el('button', className, favorites.has(String(record.id)) ? '★' : '☆');
    button.type = 'button';
    button.dataset.favoriteId = String(record.id);
    button.setAttribute('aria-pressed', String(favorites.has(String(record.id))));
    button.setAttribute('aria-label', `${t(favorites.has(String(record.id)) ? 'removeFavorite' : 'addFavorite')} ${methodName(record)}`);
    button.title = t('localFavorites');
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
        button.setAttribute('aria-label', `${t(active ? 'removeFavorite' : 'addFavorite')} ${methodName(record)}`);
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
    input.setAttribute('aria-label', t('compareMethod', methodName(record)));
    input.addEventListener('change', () => toggleCompare(record));
    label.append(input, document.createTextNode(t('compare')));
    return label;
  }

  function renderCard(record) {
    const display = localizedRecord(record);
    const article = el('article', `paper-card${selected.has(String(record.id)) ? ' selected' : ''}`);
    article.dataset.recordId = String(record.id);
    const art = el('div', 'card-art');
    if (window.AtlasFigures) art.append(window.AtlasFigures.card(record, state.lang));
    art.append(makeFavorite(record, 'favorite-button'));
    const body = el('div', 'card-body');
    const meta = el('div', 'card-meta');
    meta.append(el('span', 'year-badge', record.year || '—'), el('span', 'venue-label', record.venue || t('venuePending')));
    const title = el('button', 'paper-title-button', methodName(record));
    title.type = 'button';
    title.addEventListener('click', () => openRecord(record.id));
    const titleHeading = el('h3', 'card-heading');
    titleHeading.append(title);
    body.append(meta, titleHeading, el('p', 'paper-full-title', record.title || record.name), el('p', 'card-summary', display.summary || t('summaryFallback')));
    const badges = el('div', 'badge-row');
    const cameraTags = cameras(record).slice(0, 2).map(camera => badge(cameraLabels[camera] || camera));
    badges.append(...cameraTags, badge(shortScales[scaleValue(record)], `scale-${scaleValue(record)}`));
    if (record.depthType && !['none', 'unknown'].includes(record.depthType)) badges.append(badge(depthTypes[record.depthType] || record.depthType, 'depth-badge'));
    body.append(badges);
    const footer = el('div', 'card-footer');
    const links = el('div', 'card-links');
    const codeLabel = t(codeStatus(record) === 'none' ? 'repo' : codeStatus(record) === 'unverified' ? 'source' : 'codeLink') + ' ↗';
    links.append(sourceLink(t('paper') + ' ↗', record.paperUrl), sourceLink(codeLabel, record.codeUrl));
    footer.append(links, compareCheckbox(record));
    body.append(footer);
    const status = el('div', 'code-status');
    const statusText = el('span');
    statusText.append(el('i', `status-dot ${codeStatus(record)}`), document.createTextNode(codes[codeStatus(record)]));
    const details = el('button', 'card-detail-trigger', t('details'));
    details.type = 'button';
    details.addEventListener('click', () => openRecord(record.id));
    status.append(statusText, details);
    article.append(art, body, status);
    return article;
  }

  function renderTable(items) {
    const table = el('table', 'results-table');
    const thead = el('thead');
    const headRow = el('tr');
    ['method', 'year', 'camera', 'scaleDepth', 'code', 'readingCompare'].map(key => t(key)).forEach(label => { const th = el('th', '', label); th.scope = 'col'; headRow.append(th); });
    thead.append(headRow);
    const tbody = el('tbody');
    items.forEach(record => {
      const row = el('tr', selected.has(String(record.id)) ? 'selected' : '');
      row.dataset.recordId = String(record.id);
      const nameCell = el('td');
      const button = el('button', 'table-title', methodName(record));
      button.type = 'button'; button.addEventListener('click', () => openRecord(record.id));
      nameCell.append(button, el('span', 'table-subtitle', record.title));
      const scaleCell = el('td'); scaleCell.append(badge(shortScales[scaleValue(record)], `scale-${scaleValue(record)}`), el('span', 'table-subtitle', depthTypes[record.depthType] || t('unknown')));
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
    else toast(t('limitCompare'));
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

  function detailSection(title, label, value, fallback = t('unknown')) {
    const section = el('section', 'detail-section');
    const heading = el('h3', '', title); section.append(heading);
    if (value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length) {
      const dl = el('dl');
      Object.entries(value).forEach(([key, item]) => dl.append(el('dt', '', fieldLabel(key)), el('dd', isUnknown(item) ? 'unknown-value' : '', text(item))));
      section.append(dl);
    } else section.append(el('p', isUnknown(value) ? 'unknown-value' : '', isUnknown(value) ? fallback : text(value)));
    return section;
  }

  function openRecord(id) {
    const original = byId.get(String(id));
    if (!original) return;
    const record = localizedRecord(original);
    currentDetailId = String(id);
    const header = el('div', 'dialog-header');
    const heading = el('div');
    heading.append(el('div', 'eyebrow', `${t(record.collection === 'slam' ? 'slam' : 'depth')} / ${record.year || t('unknown')}`));
    const title = el('h2', '', methodName(record)); title.id = 'detail-title';
    heading.append(title, el('p', '', record.title || record.name));
    const close = el('button', 'dialog-close', '×'); close.type = 'button'; close.setAttribute('aria-label', t('closeDetail')); close.addEventListener('click', () => closeDialog('detail-dialog'));
    header.append(heading, close);
    const body = el('div', 'dialog-body');
    const meta = el('div', 'detail-meta');
    meta.append(...cameras(record).map(camera => badge(cameraLabels[camera] || camera)), badge(scales[scaleValue(record)], `scale-${scaleValue(record)}`), badge(depthTypes[record.depthType] || t('unknown'), 'depth-badge'), badge(record.venue || t('venuePending')));
    body.append(meta, el('p', 'detail-summary', record.summary || t('summaryPending')));
    if (window.AtlasFigures) body.append(window.AtlasFigures.detail(original, state.lang));
    const sources = el('div', 'detail-sources');
    const releaseLabel = t(['none', 'unverified'].includes(codeStatus(record)) ? 'source' : 'codeLink');
    [[t('paper'), record.paperUrl], [releaseLabel, record.codeUrl], [t('project'), record.projectUrl], [t('weights'), record.weightsUrl]].forEach(([label, url]) => sources.append(sourceLink(label + (safeUrl(url) ? ' ↗' : ''), url, 'source-link')));
    body.append(sources);
    const io = el('div', 'detail-two-column');
    const input = detailSection(t('input'), '', record.inputSummary, t('inputPending'));
    if (record.inputs && typeof record.inputs === 'object' && Object.keys(record.inputs).length) appendFields(input, record.inputs);
    const output = detailSection(t('output'), '', record.outputSummary, t('outputPending'));
    if (record.outputDetails && typeof record.outputDetails === 'object' && Object.keys(record.outputDetails).length) appendFields(output, record.outputDetails);
    else if (state.lang === 'en' && asList(record.outputs).length) output.append(el('p', '', `${t('outputItems')}: ${text(record.outputs)}`));
    io.append(input, output); body.append(io);
    const system = {
      [t('scaleCondition')]: record.scaleNote || record.metricStatus || t('unknown'),
      [t('depthDefinition')]: depthTypes[record.depthType] || record.depthType || t('unknown'),
      [t('pose')]: record.pose === true ? t('yes') : record.pose === false ? t('no') : t('unknown'),
      [t('native')]: record.nativePanoramic === true ? t('yes') : record.nativePanoramic === false ? t('noNative') : t('unknown'),
      [t('family')]: record.family || t('unknown'),
      [t('code')]: codes[codeStatus(record)],
      [t('license')]: record.license || t('unknown'),
      [t('verification')]: record.verificationLevel || t('sourceReview'),
      [t('verifiedDate')]: record.sourceChecked || catalog.updated || t('unknown')
    };
    if (record.metricStatus && record.scaleNote && record.metricStatus !== record.scaleNote) system[t('metricDetail')] = record.metricStatus;
    if (record.collection === 'slam' || record.imu !== undefined) system[t('imu')] = record.imu ?? t('unknown');
    if (record.collection === 'slam' || record.loopClosure !== undefined) system[t('loops')] = record.loopClosure ?? t('unknown');
    body.append(detailSection(t('system'), '', system));
    body.append(detailSection(t('reproduction'), '', { [t('entry')]: record.codeEntry ?? t('unknown'), [t('environment')]: record.environment ?? t('unknown') }));
    if (asList(record.authors).length || asList(record.institutions).length) body.append(detailSection(t('publication'), '', { [t('authors')]: text(record.authors), [t('institutions')]: text(record.institutions), [t('venue')]: record.venue || t('unknown'), [t('displayYear')]: record.year, [t('originalYear')]: record.firstYear ?? record.year, [t('yearRule')]: t('yearConvention') }));
    if (asList(record.notes).length) {
      const notes = detailSection(t('notes'), '', null);
      notes.querySelector('p').remove();
      const list = el('ul'); asList(record.notes).forEach(note => list.append(el('li', '', text(note)))); notes.append(list); body.append(notes);
    }
    if (asList(record.tags).length) body.append(detailSection(t('tags'), '', asList(record.tags).join(' · ')));
    const evidence = detailSection(t('evidence'), '', null);
    evidence.querySelector('p').remove();
    const list = el('ol', 'evidence-list');
    asList(record.evidence).forEach((item, index) => {
      const li = el('li');
      if (typeof item === 'string') {
        if (safeUrl(item)) li.append(sourceLink(state.lang === 'zh' ? t('sourceNumber', index + 1) + ' ↗' : item, item, 'evidence-link'));
        else if (state.lang === 'en') li.textContent = item;
        else return;
      } else if (item && typeof item === 'object') {
        const url = item.url || item.sourceUrl || item.link || (safeUrl(item.source) ? item.source : null);
        const claim = state.lang === 'zh' ? t('sourceNumber', index + 1) : item.claim || item.title || item.label || item.field || item.description || item.note || t('originalSource');
        li.append(sourceLink(text(claim) + (safeUrl(url) ? ' ↗' : ''), url, 'evidence-link'));
        const description = item.quote || item.note || item.detail || item.excerpt || (item.description !== claim ? item.description : null);
        if (description && state.lang === 'en') li.append(el('span', 'evidence-description', text(description)));
        if (item.checked || item.accessed || item.verifiedAt) li.append(el('span', 'evidence-description', `${t('checked')}: ${text(item.checked || item.accessed || item.verifiedAt)}`));
      }
      list.append(li);
    });
    if (list.children.length) evidence.append(list);
    else evidence.append(el('p', 'unknown-value', t('evidencePending')));
    body.append(evidence);
    const bottom = el('div', 'detail-bottom');
    bottom.append(el('span', '', t('detailNote')), el('div'));
    bottom.lastElementChild.id = 'detail-actions';
    body.append(bottom);
    $('detail-content').replaceChildren(header, body);
    updateDetailActions(record);
    showDialog('detail-dialog');
  }

  function appendFields(section, fields) {
    const dl = el('dl');
    Object.entries(fields).forEach(([key, item]) => dl.append(el('dt', '', fieldLabel(key)), el('dd', isUnknown(item) ? 'unknown-value' : '', text(item))));
    section.append(dl);
  }

  function updateDetailActions(record) {
    const actions = $('detail-actions');
    if (!actions || !record) return;
    const favorite = el('button', 'button button-secondary', t(favorites.has(String(record.id)) ? 'saved' : 'saveReading'));
    favorite.type = 'button'; favorite.setAttribute('aria-pressed', String(favorites.has(String(record.id)))); favorite.addEventListener('click', () => toggleFavorite(record));
    const compare = el('button', 'button button-primary', t(selected.has(String(record.id)) ? 'compared' : 'addCompare'));
    compare.type = 'button'; compare.setAttribute('aria-pressed', String(selected.has(String(record.id)))); compare.addEventListener('click', () => toggleCompare(record));
    actions.replaceChildren(favorite, compare);
  }

  function openCompare() {
    if (!selected.size) return;
    const items = [...selected].map(id => localizedRecord(byId.get(id)));
    const table = el('table', 'compare-table');
    const thead = el('thead'); const top = el('tr'); top.append(el('th', '', t('method')));
    items.forEach(record => top.append(el('th', '', methodName(record)))); thead.append(top);
    const tbody = el('tbody');
    const rows = [
      [t('yearVenue'), record => `${record.year || t('unknown')} · ${record.venue || t('unknown')}`],
      [t('camera'), record => cameras(record).map(camera => cameraLabels[camera] || camera).join(' · ')],
      [t('input'), record => record.inputSummary || t('unknown')],
      [t('inputSpecs'), record => Object.keys(record.inputs || {}).length ? text(record.inputs) : record.inputSummary || t('unknown')],
      [t('output'), record => record.outputSummary || text(record.outputs)],
      [t('outputSpecs'), record => Object.keys(record.outputDetails || {}).length ? text(record.outputDetails) : record.outputSummary || t('unknown')],
      [t('scale'), record => `${scales[scaleValue(record)]}\n${text(record.scaleNote || record.metricStatus || t('unknown'))}`],
      [t('depthDefinition'), record => depthTypes[record.depthType] || t('unknown')],
      [t('native'), record => record.nativePanoramic === true ? t('yes') : record.nativePanoramic === false ? t('no') : t('unknown')],
      [t('pose'), record => record.pose === true ? t('yes') : record.pose === false ? t('no') : t('unknown')],
      [t('family'), record => record.family || t('unknown')],
      [t('imu'), record => text(record.imu)],
      [t('loops'), record => text(record.loopClosure)],
      [t('code') + ' / ' + t('license'), record => `${codes[codeStatus(record)]}\n${text(record.license || t('unknown'))}`],
      [t('verification'), record => record.verificationLevel || t('sourceReview')],
      [t('notes'), record => text(record.notes)]
    ];
    rows.forEach(([label, getter]) => { const row = el('tr'); const heading = el('th', '', label); heading.scope = 'row'; row.append(heading); items.forEach(record => row.append(el('td', '', text(getter(record))))); tbody.append(row); });
    const links = el('tr'); links.append(el('th', '', t('official')));
    items.forEach(record => { const cell = el('td'); cell.append(sourceLink(t('paper') + ' ↗', record.paperUrl, 'compare-link'), sourceLink(t('codeLink') + ' ↗', record.codeUrl, 'compare-link'), sourceLink(t('project') + ' ↗', record.projectUrl, 'compare-link')); links.append(cell); });
    tbody.append(links); table.append(thead, tbody); $('compare-content').replaceChildren(table);
    showDialog('compare-dialog');
  }

  function resetFilters() {
    state = { ...defaults, collection: state.collection, category: 'all', view: state.view, lang: state.lang };
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
    if (!items.length) { toast(t('noExport')); return; }
    let content, type, extension;
    if (format === 'json') {
      content = JSON.stringify({ title: 'Panoramic Depth Atlas', updated: catalog.updated, exported: new Date().toISOString(), filters: state, records: items }, null, 2);
      type = 'application/json;charset=utf-8'; extension = 'json';
    } else if (format === 'csv') {
      const fields = ['id', 'collection', 'name', 'title', 'year', 'venue', 'authors', 'institutions', 'cameras', 'scale', 'scaleNote', 'metricStatus', 'depthType', 'inputSummary', 'outputSummary', 'inputs', 'outputDetails', 'pose', 'nativePanoramic', 'family', 'imu', 'loopClosure', 'codeStatus', 'license', 'paperUrl', 'codeUrl', 'projectUrl', 'weightsUrl', 'verificationLevel', 'sourceChecked', 'evidence', 'notes'];
      const cell = value => { let string = sourceText(value); if (/^[=+\-@\t\r]/.test(string)) string = `'${string}`; return `"${string.replace(/"/g, '""')}"`; };
      content = '\uFEFF' + [fields.join(','), ...items.map(record => fields.map(field => cell(record[field])).join(','))].join('\r\n');
      type = 'text/csv;charset=utf-8'; extension = 'csv';
    } else if (format === 'bib' || format === 'bibtex') {
      const escape = value => sourceText(value).replace(/\\/g, '\\textbackslash{}').replace(/[{}]/g, match => `\\${match}`).replace(/[%&#_$]/g, match => `\\${match}`).replace(/\n/g, ' ');
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
    toast(t('exported', items.length, extension.toUpperCase()));
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
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setFilter('lang', button.dataset.language)));
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
  window.addEventListener('popstate', () => { state = stateFromUrl(); render(); if (currentDetailId && $('detail-dialog').open) openRecord(currentDetailId); if ($('compare-dialog').open) openCompare(); });
  const repoUrl = safeUrl(catalog.repoUrl);
  if (repoUrl) ['repo-link', 'footer-repo'].forEach(id => { $(id).href = repoUrl; $(id).hidden = false; });
  window.PanoramicAtlas = Object.freeze({ getState: () => ({ ...state }), getFilteredRecords: () => [...getFiltered()], exportRecords, openRecord, setFilter, setLanguage: lang => setFilter('lang', lang), getSelectedIds: () => [...selected] });
  render();
  syncUrl(true);
})();
