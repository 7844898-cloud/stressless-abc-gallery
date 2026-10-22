window.Gallery = (() => {
const items = [{"id": "1366315", "title": "艾瑞克 · 三叉星底座", "series": "艾瑞克", "type": "场景图", "material": "皮革", "fabric": "宝罗马", "color": "", "base": "三叉星底座", "img": "assets/scene-01.webp", "full": "assets/scene-01.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1366315_1367315_1368315_0943306010200.jpg", "tags": ["艾瑞克", "三叉星底座", "皮革", "宝罗马"]}, {"id": "1366317", "title": "艾瑞克 · 十字星底座", "series": "艾瑞克", "type": "场景图", "material": "皮革", "fabric": "宝罗马", "color": "", "base": "十字星底座", "img": "assets/scene-02.webp", "full": "assets/scene-02.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1366317_1367317_1368317_0949646010200.jpg", "tags": ["艾瑞克", "十字星底座", "皮革", "宝罗马"]}, {"id": "1367096", "title": "艾瑞克 · 办公椅底座", "series": "艾瑞克", "type": "场景图", "material": "皮革", "fabric": "宝罗马", "color": "", "base": "办公椅底座", "img": "assets/scene-03.webp", "full": "assets/scene-03.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/13670960949606010200.jpg", "tags": ["艾瑞克", "办公椅底座", "皮革", "宝罗马"]}, {"id": "0943340", "title": "艾瑞克 · 十字星底座", "series": "艾瑞克", "type": "场景图", "material": "", "fabric": "", "color": "深灰色", "base": "十字星底座", "img": "assets/scene-04.webp", "full": "assets/scene-04.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1366317_1367317_1368317_0943340010200b.jpg", "tags": ["艾瑞克", "十字星底座", "深灰色"]}, {"id": "0949645", "title": "艾瑞克 · 十字星底座", "series": "艾瑞克", "type": "场景图", "material": "", "fabric": "宝罗马", "color": "", "base": "十字星底座", "img": "assets/scene-05.webp", "full": "assets/scene-05.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1366317_1367317_1368317_0949645010200.jpg", "tags": ["艾瑞克", "十字星底座", "宝罗马"]}, {"id": "0944204", "title": "艾瑞克 · 三叉星底座", "series": "艾瑞克", "type": "场景图", "material": "皮革", "fabric": "", "color": "", "base": "三叉星底座", "img": "assets/scene-06.webp", "full": "assets/scene-06.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1366315_1367315_1368315_0944204010200.jpg", "tags": ["艾瑞克", "三叉星底座", "皮革"]}, {"id": "1377345", "title": "柏林 · 星型标准底座", "series": "柏林", "type": "场景图", "material": "", "fabric": "维拉罗", "color": "", "base": "星型标准底座", "img": "assets/scene-07.webp", "full": "assets/scene-07.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1377345_1377346_0983445010200a.jpg", "tags": ["柏林", "星型标准底座", "维拉罗"]}, {"id": "1377385", "title": "柏林 · 十字星底座", "series": "柏林", "type": "场景图", "material": "", "fabric": "宝罗马", "color": "", "base": "十字星底座", "img": "assets/scene-08.webp", "full": "assets/scene-08.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1377385_1377386_0940340010200a.jpg", "tags": ["柏林", "十字星底座", "宝罗马"]}, {"id": "0940340b", "title": "柏林 · 十字星底座", "series": "柏林", "type": "场景图", "material": "皮革", "fabric": "", "color": "", "base": "十字星底座", "img": "assets/scene-09.webp", "full": "assets/scene-09.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1377385_1377386_0940340010200b.jpg", "tags": ["柏林", "十字星底座", "皮革"]}, {"id": "1377097", "title": "柏林 · 办公椅底座", "series": "柏林", "type": "场景图", "material": "皮革", "fabric": "", "color": "", "base": "办公椅底座", "img": "assets/scene-10.webp", "full": "assets/scene-10.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/13770970947240010200a.jpg", "tags": ["柏林", "办公椅底座", "皮革"]}, {"id": "1377097b", "title": "柏林 · 场景图片", "series": "柏林", "type": "场景图", "material": "", "fabric": "宝罗马", "color": "黑色", "base": "", "img": "assets/scene-11.webp", "full": "assets/scene-11.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/13770970947240010200b.jpg", "tags": ["柏林", "宝罗马", "黑色"]}, {"id": "POS-1020", "title": "客厅组合", "series": "组合场景", "type": "场景图", "material": "", "fabric": "", "color": "", "base": "", "img": "assets/scene-12.webp", "full": "assets/scene-12.webp", "original": "https://fde-stressless-1255521909.cos.ap-shanghai.myqcloud.com/stressless/images/1377385_1377386_0940340010200c.jpg", "tags": ["组合场景"]}];
const groups = [
 {key:'series',label:'产品系列',values:['艾瑞克','柏林','雷诺','东京','猫眼石']},
 {key:'material',label:'材质',values:['皮革','布艺']},
 {key:'fabric',label:'材质名称',values:['宝罗马','维拉罗','巴帝克','名门']},
 {key:'color',label:'具体颜色',values:['深灰色','黑色','米白色','胡桃棕','绿色']},
 {key:'base',label:'底座',values:['三叉星底座','十字星底座','星型标准底座','办公椅底座','传世标准底座']},
 {key:'type',label:'图片类型',values:['场景图','白底图','人物图']}
];
const escape = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const empty=()=>Object.fromEntries(groups.map(g=>[g.key,[]]));
const clone=f=>Object.fromEntries(groups.map(g=>[g.key,[...(f?.[g.key]||[])]]));
const chips=f=>groups.flatMap(g=>(f[g.key]||[]).map(value=>({key:g.key,value})));
const match=f=>items.filter(item=>groups.every(g=>!f[g.key]?.length||f[g.key].includes(item[g.key])));
const toggle=(f,key,value)=>{if(!groups.find(g=>g.key===key)?.values.includes(value))return f; const a=f[key]||(f[key]=[]); const i=a.indexOf(value);i<0?a.push(value):a.splice(i,1);return f;};
const aliases={
 series:{'艾瑞克':['艾瑞克','erik','埃瑞克'],'柏林':['柏林','berlin'],'雷诺':['雷诺','reno'],'东京':['东京','tokyo'],'猫眼石':['猫眼石','猫眼','opal']},
 material:{'皮革':['皮革','真皮','皮质'],'布艺':['布艺','布料','布面']},
 fabric:{'宝罗马':['宝罗马','paloma'],'维拉罗':['维拉罗','velaro'],'巴帝克':['巴帝克','batick'],'名门':['名门','noblesse']},
 color:{'深灰色':['深灰','灰色'],'黑色':['黑色'],'米白色':['米白','白色'],'胡桃棕':['胡桃棕','棕色'],'绿色':['绿色','绿的']},
 base:{'三叉星底座':['三叉星','三叉'],'十字星底座':['十字星','十字'],'星型标准底座':['星型标准','星型底座'],'办公椅底座':['办公椅底座'],'传世标准底座':['传世']},
 type:{'场景图':['场景图','场景','客厅'],'白底图':['白底图','白底'],'人物图':['人物图','人物','模特']}
};
function query(text,current){
 const s=text.toLowerCase().trim();let f=clone(current), recognized=[];
 if(/^(全部|所有|不限|看看全部|全部图片|看全部图片|重置|清空|重新开始)[。！!\s]*$/.test(s)||/清空所有条件|清除所有条件/.test(s))return {filters:empty(),recognized:['全部图片'],unknown:false,explanation:'已清除条件，可以重新找图。'};
 for(const g of groups){
  let values=[];
  for(const [value,words] of Object.entries(aliases[g.key])){
   if(words.some(w=>s.includes(w))){
    if(g.key==='color'&&value==='米白色'&&/白底/.test(s)&&!/(米白|白色)/.test(s))continue;
    if(g.key==='type'&&value==='人物图'&&/(无|没有|不含|不要|不带)人物/.test(s))continue;
    const neg=words.some(w=>s.includes('不要'+w)||s.includes('去掉'+w)||s.includes('排除'+w));
    if(neg){f[g.key]=(f[g.key]||[]).filter(x=>x!==value);recognized.push('移除 '+value);}else values.push(value);
   }
  }
  if(values.length){f[g.key]=/也要|加上|同时保留/.test(s)?[...new Set([...(f[g.key]||[]),...values])]:values;recognized.push(...values);}
  if(s.includes(g.label+'不限')||s.includes('不限'+g.label)||s.includes('清除'+g.label)){f[g.key]=[];recognized.push(g.label+'不限');}
 }
 if(/全部图片|所有图片/.test(s)&&!recognized.length){f=empty();recognized.push('全部图片');}
 const unknown=!recognized.length;
 return {filters:f,recognized,unknown,explanation:unknown?'可以告诉我产品系列、材质、底座或图片类型，例如“艾瑞克的场景图”。':'已理解 '+recognized.join('、')+'。未提到的条件会继续保留。'};
}
function filterHTML(f){return groups.map(g=>`<section class="filter-group"><h3>${g.label}<small>可多选</small></h3><div class="filter-options">${g.values.map(v=>`<button type="button" data-filter-key="${g.key}" data-filter-value="${v}" aria-pressed="${f[g.key]?.includes(v)||false}">${v}</button>`).join('')}</div></section>`).join('');}
let dialog,returnFocus,contextSnapshot;
function closeDetail(){if(!dialog)return;dialog.close();dialog.remove();dialog=null;returnFocus?.focus({preventScroll:true});}
function openDetail(id,context={}){
 const item=items.find(x=>x.id===id);if(!item)return;
 if(dialog)closeDetail();returnFocus=document.activeElement;contextSnapshot={query:context.query||'',filters:clone(context.filters)};
 dialog=document.createElement('dialog');dialog.className='g-detail';dialog.setAttribute('aria-labelledby','g-detail-title');
 dialog.innerHTML=`<header class="g-detail-head"><button type="button" class="g-return" data-g-close>← 返回图片</button><span>Stressless · 图片预览</span><button type="button" class="g-close" aria-label="关闭图片预览" data-g-close>×</button></header><div class="g-detail-body"><div class="g-image-wrap"><img src="${item.full}" alt="${escape(item.title)}"></div><aside class="g-detail-info"><div class="g-eyebrow">${item.type} / 示例素材</div><h2 id="g-detail-title">${escape(item.series)}</h2><p class="g-detail-base">${escape(item.base||'客厅组合')}</p><dl>${[['材质',item.material],['材质名称',item.fabric],['颜色',item.color]].filter(r=>r[1]).map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}</dl><p class="g-image-hint">长按图片，使用设备的保存或分享功能。</p><div class="g-feedback"><h3>这张图片的信息有误？</h3><p>说明需要核实的地方，图片会自动关联。</p><form id="g-feedback-form"><label class="g-sr" for="g-feedback-text">图片反馈说明</label><textarea id="g-feedback-text" rows="3" maxlength="500" placeholder="例如：这张图的底座应为十字星底座" required></textarea><div class="g-feedback-actions"><small>本地演示 · 不发送至服务器</small><button type="submit">保存反馈</button></div><p class="g-feedback-status" role="status"></p></form></div><small class="g-image-id">图片编号 ${escape(item.id)}</small></aside></div>`;
 document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-g-close]').focus();
 dialog.querySelectorAll('[data-g-close]').forEach(b=>b.onclick=closeDetail);
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeDetail();});
 dialog.addEventListener('click',e=>{if(e.target===dialog)closeDetail();});
 dialog.querySelector('form').addEventListener('submit',e=>{
  e.preventDefault();const ta=dialog.querySelector('textarea'),val=ta.value.trim(),status=dialog.querySelector('.g-feedback-status');
  if(!val){ta.setCustomValidity('请输入需要核实的内容');ta.reportValidity();return;}ta.setCustomValidity('');
  try{const records=JSON.parse(localStorage.getItem('stressless-prototype-feedback')||'[]');records.push({id:crypto.randomUUID?.()||String(Date.now()),imageId:item.id,text:val,context:contextSnapshot,time:new Date().toISOString()});localStorage.setItem('stressless-prototype-feedback',JSON.stringify(records));status.textContent='已保存到此浏览器，关联图片 '+item.id+'。';ta.value='';}
  catch{status.textContent='浏览器暂时无法保存，请复制反馈内容。';}
 });
 dialog.querySelector('textarea').addEventListener('input',e=>e.target.setCustomValidity(''));
}
return {items,groups,empty,clone,query,match,chips,toggle,filterHTML,escape,openDetail};
})();

// Keep mobile controls within the visible viewport when browser chrome or the keyboard changes.
(()=>{
 const root=document.documentElement;let baseline=window.innerHeight,lastWidth=window.innerWidth,pending=false;
 function sync(){pending=false;const v=window.visualViewport,height=v?.height||window.innerHeight,top=v?.offsetTop||0,width=window.innerWidth;
  const editing=document.hasFocus()&&document.activeElement?.matches('textarea,input:not([type="button"]):not([type="submit"]),[contenteditable="true"]');
  if(Math.abs(width-lastWidth)>80||!editing)baseline=window.innerHeight;lastWidth=width;
  root.style.setProperty('--app-height',height+'px');root.style.setProperty('--viewport-top',top+'px');root.style.setProperty('--viewport-bottom',Math.max(0,window.innerHeight-height-top)+'px');
  if(editing&&baseline-height>100&&width<=1000)document.body.setAttribute('data-keyboard-open','true');else document.body.removeAttribute('data-keyboard-open');
 }
 function queue(){if(!pending){pending=true;requestAnimationFrame(sync)}}
 window.addEventListener('resize',queue,{passive:true});window.visualViewport?.addEventListener('resize',queue,{passive:true});window.visualViewport?.addEventListener('scroll',queue,{passive:true});document.addEventListener('focusin',queue);document.addEventListener('focusout',()=>setTimeout(queue,70));sync();
})();
