// Functional integration against the real public catalog; DOM emulation, not browser layout QA.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {JSDOM,VirtualConsole}=require('../tools/test-runtime/node_modules/jsdom');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'site/app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'site/index.html'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'site/data/catalog.json'),'utf8'));
const passed=[];
function boot(query='',data=catalog,storage=null){
  const errors=[];const virtualConsole=new VirtualConsole();
  virtualConsole.on('jsdomError',e=>errors.push(e.message));
  const dom=new JSDOM(html,{url:'https://somebo1.github.io/Awesome-Panoramic-Depth-SLAM/'+query,
    runScripts:'outside-only',pretendToBeVisual:true,virtualConsole});
  const w=dom.window;
  w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','')};
  w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'))};
  w.HTMLElement.prototype.scrollIntoView=function(){};
  w.URL.createObjectURL=()=> 'blob:test-atlas';w.URL.revokeObjectURL=()=>{};
  w.HTMLAnchorElement.prototype.click=function(){};
  if(storage)w.localStorage.setItem('panoramic-depth-atlas:v1',storage);
  w.ATLAS_DATA=JSON.parse(JSON.stringify(data));
  w.addEventListener('error',e=>errors.push(e.message));
  w.eval(source);
  if(errors.length)throw new Error(errors.join('\n'));
  return {dom,w,doc:w.document,api:w.PanoramicAtlas,errors};
}
function check(name,fn){fn();passed.push(name);console.log('PASS '+name)}
let a=boot();
check('default panoramic depth catalog renders real entries',()=>{
  assert.equal(a.api.getState().collection,'depth');assert.equal(a.api.getState().category,'panoramic');
  assert.equal(a.api.getFilteredRecords().length,22);assert.equal(a.doc.querySelectorAll('.paper-card').length,22);
  assert.equal(a.doc.getElementById('depth-count').textContent,'30');
  assert.equal(a.doc.getElementById('slam-count').textContent,'26');
});
check('search from actual input updates URL, results and no-match state',()=>{
  const search=a.doc.getElementById('search');search.value='UniDAC';search.dispatchEvent(new a.w.Event('input',{bubbles:true}));
  assert.equal(a.api.getFilteredRecords().length,1);assert.equal(a.api.getFilteredRecords()[0].id,'unidac');
  assert.equal(new URL(a.w.location.href).searchParams.get('q'),'UniDAC');
  search.value='no-such-paper-987654';search.dispatchEvent(new a.w.Event('input',{bubbles:true}));
  assert.equal(a.api.getFilteredRecords().length,0);assert.equal(a.doc.getElementById('empty-state').hidden,false);
  a.doc.getElementById('empty-reset').click();assert.equal(a.api.getFilteredRecords().length,30);
});
check('short DA query searches method names and aliases rather than dataset boilerplate',()=>{
  a.api.setFilter('category','panoramic');a.api.setFilter('q','DA');
  const ids=Array.from(a.api.getFilteredRecords(),r=>r.id);
  assert(ids.includes('dap'));assert(ids.includes('da2_panorama'));assert(ids.includes('unidac'));
  assert(!ids.includes('mode'));assert(!ids.includes('mcpdepth'));assert(ids.length<22);
  a.api.setFilter('q','');a.api.setFilter('category','all');
});
check('native ERP SLAM filter excludes Panoptic PanoSLAM and PAL systems',()=>{
  a.doc.getElementById('tab-slam').click();a.api.setFilter('category','panoramic');
  const ids=Array.from(a.api.getFilteredRecords(),r=>r.id);
  assert.equal(ids.length,5);assert(ids.includes('odgsslam2026'));assert(!ids.includes('panoslam2025'));
  assert(!ids.includes('p2uslam2026'));assert(!ids.includes('orbslam3_2021'));
});
check('combined year, code status and metric filters use explicit metadata',()=>{
  a.api.setFilter('collection','depth');a.api.setFilter('category','all');
  a.api.setFilter('year','2026');a.api.setFilter('scale','metric');a.api.setFilter('code','released');
  const items=a.api.getFilteredRecords();assert(items.length>0);
  assert(items.every(r=>String(r.year)==='2026'&&r.scale==='metric'&&r.codeStatus==='released'));
  a.api.setFilter('code','all');a.api.setFilter('year','all');a.api.setFilter('scale','all');
});
check('table view contains all filtered entries',()=>{
  a.doc.querySelector('[data-view="table"]').click();
  assert.equal(a.doc.querySelectorAll('.results-table tbody tr').length,30);
  a.doc.querySelector('[data-view="cards"]').click();
});
check('four-way comparison enforces limit and displays nested licenses',()=>{
  const boxes=Array.from(a.doc.querySelectorAll('[data-compare-id]'));
  assert(boxes.length>=5);
  boxes.slice(0,5).forEach(b=>{b.checked=true;b.dispatchEvent(new a.w.Event('change',{bubbles:true}))});
  assert.equal(a.api.getSelectedIds().length,4);assert.equal(boxes[4].checked,false);
  a.doc.getElementById('open-compare').click();assert.equal(a.doc.getElementById('compare-dialog').open,true);
  assert(!a.doc.getElementById('compare-content').textContent.includes('[object Object]'));
  a.doc.getElementById('compare-dialog').close();a.doc.getElementById('clear-compare').click();
  assert.equal(a.api.getSelectedIds().length,0);
});
check('details preserve false IMU/loop flags, units and source entries',()=>{
  a.api.openRecord('openvins2020');
  let fields=Array.from(a.doc.querySelectorAll('#detail-content dt'));
  let loop=fields.find(d=>d.textContent.includes('回环'));assert.equal(loop.nextElementSibling.textContent,'否');
  assert(a.doc.getElementById('detail-content').textContent.includes('源码入口与环境'));
  a.doc.getElementById('detail-dialog').close();
  a.api.openRecord('dap');const content=a.doc.getElementById('detail-content').textContent;
  assert(content.includes('100'));assert(content.includes('depth_convention'));
  assert(a.doc.querySelectorAll('#detail-content .evidence-list li').length>0);
  a.doc.getElementById('detail-dialog').close();
});
check('favorites persist locally and are filterable',()=>{
  const first=a.doc.querySelector('[data-favorite-id]');const id=first.dataset.favoriteId;first.click();
  a.doc.getElementById('favorites-filter').click();assert.equal(a.api.getFilteredRecords().length,1);
  assert.equal(a.api.getFilteredRecords()[0].id,id);
  const saved=a.w.localStorage.getItem('panoramic-depth-atlas:v1');
  const restored=boot('?collection=depth&category=all&favorites=1',catalog,saved);
  assert.equal(restored.api.getFilteredRecords().length,1);restored.dom.window.close();
  a.api.setFilter('favorites',false);
});
check('JSON, CSV and BibTeX export the current filtered dataset',()=>{
  a.api.setFilter('q','UniDAC');
  const json=JSON.parse(a.api.exportRecords('json'));assert.equal(json.records.length,1);
  assert(a.api.exportRecords('csv').includes('inputSummary'));
  const bib=a.api.exportRecords('bib');assert(bib.includes('@misc{unidac'));assert(bib.includes(' and '));
  a.api.setFilter('q','');
});
check('URL deep links, invalid filters and popstate are normalized',()=>{
  const b=boot('?collection=slam&category=fisheye&q=OpenVINS&view=table');
  assert.equal(b.api.getFilteredRecords().length,1);assert.equal(b.api.getState().view,'table');
  b.w.history.replaceState(null,'','?collection=depth&category=panoramic&q=DAP');
  b.w.dispatchEvent(new b.w.PopStateEvent('popstate'));assert.equal(b.api.getState().collection,'depth');
  const c=boot('?collection=INVALID&category=INVALID&scale=bogus');
  assert.equal(c.api.getState().collection,'depth');assert.equal(c.api.getState().scale,'all');
  b.dom.window.close();c.dom.window.close();
});
check('untrusted catalog strings and unsafe URLs do not become executable HTML',()=>{
  const hostile=JSON.parse(JSON.stringify(catalog));hostile.records[0].title='<img src=x onerror="window.pwned=true">';
  hostile.records[0].codeUrl='javascript:alert(1)';
  const b=boot('?collection=depth&category=all',hostile);
  assert.equal(b.doc.querySelectorAll('img[onerror]').length,0);assert.equal(b.w.pwned,undefined);
  b.api.openRecord(hostile.records[0].id);
  assert.equal(b.doc.querySelectorAll('a[href^="javascript:"]').length,0);b.dom.window.close();
});
check('mobile filters and keyboard search are operable',()=>{
  const button=a.doc.getElementById('mobile-filters');button.click();assert.equal(button.getAttribute('aria-expanded'),'true');
  button.click();assert.equal(button.getAttribute('aria-expanded'),'false');
  a.doc.body.focus();a.doc.dispatchEvent(new a.w.KeyboardEvent('keydown',{key:'/',bubbles:true}));
  assert.equal(a.doc.activeElement.id,'search');
});
assert.deepEqual(a.errors,[]);a.dom.window.close();
const report={suite:'real-catalog DOM integration (not browser visual QA)',passed:passed.length,checks:passed,records:catalog.records.length};
fs.mkdirSync(path.join(root,'tests/results'),{recursive:true});
fs.writeFileSync(path.join(root,'tests/results/frontend.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
