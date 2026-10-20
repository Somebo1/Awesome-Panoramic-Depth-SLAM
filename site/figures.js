/* Attributed paper excerpts and author project figures; original sources stay local. */
(() => {
  'use strict';
  const strings = {
    zh: { expand: '点击查看论文原图', close: '关闭论文配图', source: '查看来源论文', author: '作者官方方法图', authorSource: '查看作者来源', missing: '论文配图待补充', page: n => `第 ${n} 页`, note: '配图用于文献介绍；著作权归原作者。', failed: '图片加载失败，请查看原始来源。' },
    en: { expand: 'View paper figure', close: 'Close paper figure', source: 'Source paper', author: 'Author project figure', authorSource: 'Author source', missing: 'Paper figure unavailable', page: n => `p. ${n}`, note: 'Figure for literature review. Copyright belongs to the original authors.', failed: 'Image could not load. Please open the original source.' }
  };
  const node = (tag, className, value) => {
    const item = document.createElement(tag);
    if (className) item.className = className;
    if (value !== undefined) item.textContent = String(value);
    return item;
  };
  const language = value => value === 'en' || (!value && document.documentElement.lang === 'en') ? 'en' : 'zh';
  const localImage = value => typeof value === 'string' && /^assets\/(?:papers|datasets)\/[a-zA-Z0-9_-]+\.(?:webp|png|jpg|jpeg)$/.test(value) ? './' + value : '';
  const publicUrl = value => { try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const localized = (value, lang) => typeof value === 'object' && value ? value[lang] || value.en || value.zh || '' : String(value || '');
  const validFigure = record => Boolean(record.figure && record.figure.verified === true && localImage(record.figure.image) && localImage(record.figure.thumbnail));
  const label = (figure, lang) => {
    if (['author-project-image','author-video-frame'].includes(figure.sourceType)) return figure.kind==='dataset-preview' ? (lang==='zh'?'官方数据示例':'Official dataset preview') : strings[lang].author;
    const figureLabel = String(figure.figureLabel || '');
    const number = figureLabel.match(/(?:figure|fig\.?)\s*([\dA-Za-z.]+)/i);
    return [lang === 'zh' && number ? `图 ${number[1]}` : figureLabel, figure.page ? strings[lang].page(figure.page) : ''].filter(Boolean).join(' · ');
  };
  const source = (figure, lang) => {
    const authorImage = ['author-project-image','author-video-frame'].includes(figure.sourceType);
    const link = node('a', 'paper-figure-source', strings[lang][authorImage ? 'authorSource' : 'source'] + ' ↗');
    const href = publicUrl(authorImage ? figure.sourcePageUrl : figure.paperUrl);
    if (href) { link.href = href + (authorImage || href.includes('#') ? '' : `#page=${Number(figure.page) || 1}`); link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    return link;
  };
  function image(record, lang, thumbnail) {
    const figure = record.figure;
    const img = node('img', 'paper-figure-image');
    img.src = localImage(thumbnail ? figure.thumbnail : figure.image);
    img.alt = `${record.name}: ${localized(figure.caption, lang) || label(figure, lang)}`;
    img.decoding = 'async';
    if (thumbnail) img.loading = 'lazy';
    img.addEventListener('error', () => {
      img.hidden = true;
      img.parentElement.append(node('span', 'paper-figure-error', strings[lang].failed));
    }, {once:true});
    return img;
  }
  let dialog, returnFocus;
  function close() { if (dialog && dialog.open) dialog.close(); }
  function open(record, locale) {
    if (!validFigure(record)) return;
    const lang = language(locale), figure = record.figure;
    if (!dialog) {
      dialog = node('dialog', 'paper-figure-dialog');
      dialog.id = 'paper-figure-dialog';
      dialog.setAttribute('aria-labelledby', 'paper-figure-title');
      document.body.append(dialog);
      dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
      dialog.addEventListener('close', () => { document.body.classList.remove('figure-open'); if (returnFocus && returnFocus.isConnected) returnFocus.focus(); });
    }
    const header = node('div', 'paper-figure-header');
    const title = node('h2', '', `${record.name} · ${label(figure, lang)}`); title.id = 'paper-figure-title';
    const button = node('button', 'dialog-close', '×'); button.type = 'button'; button.setAttribute('aria-label', strings[lang].close); button.addEventListener('click', close);
    header.append(title, button);
    const canvas = node('div', 'paper-figure-canvas'); canvas.append(image(record, lang, false));
    const caption = node('div', 'paper-figure-description');
    caption.append(node('p', '', localized(figure.caption, lang)), node('p', 'paper-figure-credit', localized(figure.credit, lang) || strings[lang].note), source(figure, lang));
    dialog.replaceChildren(header, canvas, caption);
    returnFocus = document.activeElement;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('figure-open');
    button.focus();
  }
  function card(record, locale) {
    const lang = language(locale);
    if (!validFigure(record)) return node('div', 'paper-preview-missing', strings[lang].missing);
    const button = node('button', 'paper-preview'); button.type = 'button';
    button.dataset.figureId = record.id;
    button.setAttribute('aria-label', `${record.name}: ${record.collection==='datasets'?(lang==='zh'?'查看数据集示例':'View dataset preview'):strings[lang].expand}`);
    button.title = record.collection==='datasets'?(lang==='zh'?'查看数据集示例':'View dataset preview'):strings[lang].expand;
    button.append(image(record, lang, true));
    const overlay = node('span', 'paper-preview-label');
    overlay.append(node('span', '', label(record.figure, lang)), node('span', '', '↗'));
    button.append(overlay);
    button.addEventListener('click', () => open(record, lang));
    return button;
  }
  function detail(record, locale) {
    const lang = language(locale), wrapper = node('figure', 'detail-paper-figure');
    if (!validFigure(record)) { wrapper.append(node('p', 'paper-preview-missing', strings[lang].missing)); return wrapper; }
    wrapper.append(card(record, lang));
    const caption = node('figcaption');
    caption.append(node('span', '', localized(record.figure.caption, lang)), source(record.figure, lang));
    wrapper.append(caption);
    return wrapper;
  }
  window.AtlasFigures = Object.freeze({ card, detail, open, close, validFigure });
})();
