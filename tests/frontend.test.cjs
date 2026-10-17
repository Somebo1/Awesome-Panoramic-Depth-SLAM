// Functional integration against the real public catalog; DOM emulation, not browser layout QA.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {JSDOM,VirtualConsole}=require('../tools/test-runtime/node_modules/jsdom');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'site/app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'site/index.html'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'site/data/catalog.json'),'utf8'));
const depthRecords=catalog.records.filter(r=>r.collection==='depth');
const slamRecords=catalog.records.filter(r=>r.collection==='slam');
const panoramicDepth=depthRecords.filter(r=>r.cameras.includes('panoramic'));
const panoramicSlam=slamRecords.filter(r=>r.cameras.includes('panoramic'));
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
  for(const helper of ['i18n.js','figures.js']){
    const file=path.join(root,'site',helper);if(fs.existsSync(file))w.eval(fs.readFileSync(file,'utf8'));
  }
  w.eval(source);
  if(errors.length)throw new Error(errors.join('\n'));
  return {dom,w,doc:w.document,api:w.PanoramicAtlas,errors};
}
function check(name,fn){fn();passed.push(name);console.log('PASS '+name)}
let a=boot();
check('default panoramic depth catalog renders real entries',()=>{
  assert.equal(a.api.getState().collection,'depth');assert.equal(a.api.getState().category,'panoramic');
  assert.equal(a.api.getFilteredRecords().length,panoramicDepth.length);assert.equal(a.doc.querySelectorAll('.paper-card').length,panoramicDepth.length);
  assert.equal(a.doc.getElementById('depth-count').textContent,String(depthRecords.length));
  assert.equal(a.doc.getElementById('slam-count').textContent,String(slamRecords.length));
});
check('search from actual input updates URL, results and no-match state',()=>{
  const search=a.doc.getElementById('search');search.value='UniDAC';search.dispatchEvent(new a.w.Event('input',{bubbles:true}));
  assert.equal(a.api.getFilteredRecords().length,1);assert.equal(a.api.getFilteredRecords()[0].id,'unidac');
  assert.equal(new URL(a.w.location.href).searchParams.get('q'),'UniDAC');
  search.value='no-such-paper-987654';search.dispatchEvent(new a.w.Event('input',{bubbles:true}));
  assert.equal(a.api.getFilteredRecords().length,0);assert.equal(a.doc.getElementById('empty-state').hidden,false);
  a.doc.getElementById('empty-reset').click();assert.equal(a.api.getFilteredRecords().length,depthRecords.length);
});
check('short DA query searches method names and aliases rather than dataset boilerplate',()=>{
  a.api.setFilter('category','panoramic');a.api.setFilter('q','DA');
  const ids=Array.from(a.api.getFilteredRecords(),r=>r.id);
  assert(ids.includes('dap'));assert(ids.includes('da2_panorama'));assert(ids.includes('unidac'));
  assert(!ids.includes('mode'));assert(!ids.includes('mcpdepth'));assert(ids.length<panoramicDepth.length);
  a.api.setFilter('q','');a.api.setFilter('category','all');
});
check('ERP-input SLAM filter excludes Panoptic PanoSLAM and PAL systems',()=>{
  a.doc.getElementById('tab-slam').click();a.api.setFilter('category','panoramic');
  const ids=Array.from(a.api.getFilteredRecords(),r=>r.id);
  assert.equal(ids.length,panoramicSlam.length);assert(ids.includes('odgsslam2026'));assert(!ids.includes('panoslam2025'));
  assert(!ids.includes('p2uslam2026'));assert(!ids.includes('orbslam3_2021'));
});
check('reviewed panoramic additions preserve sensor, scale and loop distinctions',()=>{
  const byId=new Map(slamRecords.map(r=>[r.id,r]));
  for(const id of ['vo360_2022','vio360_2024','dvo360_2026','patchmatch_panorama2022','cubesplat2026','panoloop2026']){
    const r=byId.get(id);assert(r,id);assert(r.cameras.includes('panoramic'),id);
    assert(!r.cameras.includes('multi'),id+' virtual views are not physical cameras');
    assert.equal(r.pose,true,id);assert.equal(r.nativePanoramic,true,id+' ERP input');
  }
  for(const id of ['vo360_2022','dvo360_2026','patchmatch_panorama2022','panoloop2026'])assert.equal(byId.get(id).scale,'relative',id);
  assert.equal(byId.get('vio360_2024').scale,'metric');assert.equal(byId.get('vio360_2024').imu,true);
  assert.notEqual(byId.get('cubesplat2026').scale,'metric','shared optical center does not provide a stereo baseline');
  for(const id of ['vo360_2022','vio360_2024','dvo360_2026'])assert.equal(byId.get(id).loopClosure,false,id+' is odometry');
  assert.equal(byId.get('panoloop2026').loopClosure,true);
  assert.match(byId.get('panoloop2026').notes.join(' '),/offline/i);
  assert.notEqual(byId.get('vio360_2024').codeStatus,'released');
  assert.equal(byId.get('cubesplat2026').codeStatus,'released');
  a.api.openRecord('cubesplat2026');
  const loop=Array.from(a.doc.querySelectorAll('#detail-content dt')).find(d=>d.textContent.includes('回环'));
  assert.equal(loop.nextElementSibling.textContent,'待核实');a.doc.getElementById('detail-dialog').close();
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
  assert.equal(a.doc.querySelectorAll('.results-table tbody tr').length,depthRecords.length);
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
  assert(content.includes('100'));assert(content.includes('depth_convention')||content.includes('深度约定')||content.includes('深度定义'));
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
check('all method cards use attributed, locally hosted paper figures',()=>{
  for(const r of catalog.records.filter(r=>r.collection!=='datasets')){
    assert.equal(r.figure.verified,true,r.id);assert(r.figure.caption.zh&&r.figure.caption.en);
    assert(r.figure.credit.zh&&r.figure.credit.en);
    if(r.figure.sourceType==='author-project-image'){
      assert.match(r.figure.sourceSha256,/^[a-f0-9]{64}$/);assert(r.figure.sourcePageUrl.startsWith('https://'));
      assert.equal(r.figure.page,undefined);assert.equal(r.figure.pdfSha256,undefined);
    }else assert(r.figure.page>=1);
    for(const key of ['image','thumbnail'])assert(fs.existsSync(path.join(root,'site',r.figure[key])),r.id+' '+key);
  }
  a.api.setFilter('collection','depth');a.api.setFilter('category','all');
  assert.equal(a.doc.querySelectorAll('.paper-card .paper-preview img').length,depthRecords.length);
  assert.equal(a.doc.querySelectorAll('.paper-card .card-art>svg').length,0);
  const trigger=a.doc.querySelector('[data-figure-id]');trigger.click();
  const dialog=a.doc.getElementById('paper-figure-dialog');assert.equal(dialog.open,true);
  assert(dialog.querySelector('img').getAttribute('src').startsWith('./assets/papers/'));
  assert(dialog.querySelector('a').getAttribute('href').includes('#page='));dialog.close();
});
check('author project figures have an honest source link without an invented PDF page',()=>{
  const b=boot('?collection=slam&category=all&lang=zh');
  b.doc.querySelector('[data-figure-id="vio360_2024"]').click();
  const dialog=b.doc.getElementById('paper-figure-dialog');assert(dialog.open);
  assert(dialog.textContent.includes('作者官方方法图'));assert(!dialog.textContent.includes('第 1 页'));
  const link=dialog.querySelector('a');assert(link.href.includes('shengyang93.github.io/publication/2023-360-vio/'));
  assert(!link.href.includes('#page='));dialog.close();
  const unsafe=JSON.parse(JSON.stringify(catalog));unsafe.records.find(r=>r.id==='vio360_2024').figure.sourcePageUrl='javascript:alert(1)';
  const c=boot('?collection=slam&category=all&lang=en',unsafe);c.doc.querySelector('[data-figure-id="vio360_2024"]').click();
  assert.equal(c.doc.querySelectorAll('a[href^="javascript:"]').length,0);b.dom.window.close();c.dom.window.close();
});
check('language toggle updates UI and record prose while preserving filters and saved choice',()=>{
  a.api.setFilter('q','UniDAC');
  const before=a.api.getFilteredRecords()[0].id;
  a.api.setLanguage('en');assert.equal(a.doc.documentElement.lang,'en');
  assert.equal(a.api.getState().lang,'en');assert.equal(a.api.getFilteredRecords()[0].id,before);
  assert(!/[\u3400-\u9fff]/.test(a.doc.querySelector('.card-summary').textContent));
  assert(a.doc.getElementById('export-button').textContent.includes('Export'));
  for(const record of catalog.records){
    a.api.openRecord(record.id);assert(!/[\u3400-\u9fff]/.test(a.doc.getElementById('detail-content').textContent),record.id+' English detail');
    a.doc.getElementById('detail-dialog').close();
  }
  const saved=a.w.localStorage.getItem('panoramic-depth-atlas:v1');const b=boot('',catalog,saved);
  assert.equal(b.api.getState().lang,'en');assert.equal(b.doc.documentElement.lang,'en');b.dom.window.close();
  a.api.setLanguage('zh');assert.equal(a.doc.documentElement.lang,'zh-CN');
  assert(/[\u3400-\u9fff]/.test(a.doc.querySelector('.card-summary').textContent));
  const c=boot('?lang=en&collection=slam&category=all');assert.equal(c.api.getState().lang,'en');c.dom.window.close();
  a.api.setFilter('q','');
});
check('unsafe figure paths and source links are never rendered',()=>{
  const bad=JSON.parse(JSON.stringify(catalog));bad.records[0].figure.image='https://untrusted.example/x.png';
  bad.records[0].figure.paperUrl='javascript:alert(1)';
  const b=boot('?collection=depth&category=all',bad);
  const card=b.doc.querySelector(`[data-record-id="${bad.records[0].id}"]`);
  assert.equal(card.querySelectorAll('.paper-preview img').length,0);
  assert.equal(b.doc.querySelectorAll('a[href^="javascript:"]').length,0);b.dom.window.close();
});
check('datasets have task-specific filters, localized details, comparison and complete exports',()=>{
  const datasetRecords=catalog.records.filter(r=>r.collection==='datasets');assert(datasetRecords.length>=20);
  const b=boot('?collection=datasets&category=all&lang=en');
  assert.equal(b.api.getFilteredRecords().length,datasetRecords.length);
  assert.equal(b.doc.getElementById('method-filters').hidden,true);assert.equal(b.doc.getElementById('dataset-filters').hidden,false);
  assert.equal(b.doc.querySelectorAll('.dataset-card').length,datasetRecords.length);assert.equal(b.doc.querySelectorAll('.dataset-card img').length,0);
  for(const [key,value] of [['task','slam'],['environment','outdoor'],['reality','real']])b.api.setFilter(key,value);
  const result=b.api.getFilteredRecords();assert(result.length>0);assert(result.every(r=>r.tasks.includes('slam')&&r.environment.includes('outdoor')&&r.reality==='real'));
  assert.equal(new URL(b.w.location.href).searchParams.get('task'),'slam');
  const csv=b.api.exportRecords('csv');assert(csv.includes('groundTruth'));assert(csv.includes('datasetDetails'));
  assert.equal(JSON.parse(b.api.exportRecords('json')).records.length,result.length);
  b.doc.querySelector('[data-view="table"]').click();assert.equal(b.doc.querySelectorAll('tbody tr').length,result.length);
  b.doc.querySelector('[data-view="cards"]').click();
  for(const checkbox of Array.from(b.doc.querySelectorAll('[data-compare-id]')).slice(0,2)){checkbox.checked=true;checkbox.dispatchEvent(new b.w.Event('change',{bubbles:true}))}
  b.doc.getElementById('open-compare').click();assert(b.doc.getElementById('compare-content').textContent.includes('Ground truth'));
  b.doc.getElementById('compare-dialog').close();
  for(const record of datasetRecords){b.api.openRecord(record.id);assert(!/[\u3400-\u9fff]/.test(b.doc.getElementById('detail-content').textContent),record.id+' dataset English');b.doc.getElementById('detail-dialog').close()}
  b.api.setLanguage('zh');b.api.openRecord(datasetRecords[0].id);assert(b.doc.getElementById('detail-content').textContent.includes('真值'));b.doc.getElementById('detail-dialog').close();
  b.api.setFilter('collection','depth');assert.equal(b.api.getState().task,'all');assert.equal(b.doc.getElementById('method-filters').hidden,false);assert.equal(b.api.getSelectedIds().length,0);
  b.dom.window.close();
});
check('third tab keyboard navigation and dataset deep links normalize correctly',()=>{
  const b=boot();b.doc.getElementById('tab-depth').dispatchEvent(new b.w.KeyboardEvent('keydown',{key:'End',bubbles:true}));assert.equal(b.api.getState().collection,'datasets');
  b.doc.getElementById('tab-datasets').dispatchEvent(new b.w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));assert.equal(b.api.getState().collection,'depth');
  const c=boot('?collection=datasets&category=all&task=invalid&access=unknown&scale=metric&lang=en');assert.equal(c.api.getState().task,'all');assert.equal(c.api.getState().scale,'all');assert(c.api.getFilteredRecords().every(r=>r.access==='unknown'));
  assert.equal(c.doc.querySelectorAll('.hero-visual').length,0);b.dom.window.close();c.dom.window.close();
});
assert.deepEqual(a.errors,[]);a.dom.window.close();
const report={suite:'real-catalog DOM integration (not browser visual QA)',passed:passed.length,checks:passed,records:catalog.records.length};
fs.mkdirSync(path.join(root,'tests/results'),{recursive:true});
fs.writeFileSync(path.join(root,'tests/results/frontend.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
