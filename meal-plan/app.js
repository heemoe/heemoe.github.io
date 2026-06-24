const recipes = [
  {
    day: '周一', meal: '午餐', title: '番茄鹰嘴豆鸡胸糙米碗 + 西兰花', time: '25 分钟', tags: ['鸡胸', '豆类', '杂粮饭'],
    ingredients: [['鸡胸肉','200g'],['熟鹰嘴豆','120g，罐头冲洗后用'],['番茄','2 个，约 300g'],['西兰花','200g'],['熟糙米饭/杂粮饭','350–450g'],['蒜','2 瓣'],['橄榄油','15ml'],['生抽','10ml'],['淀粉','5g'],['清水','80ml'],['盐','1g'],['黑胡椒/意大利香草','少量，可不放']],
    steps: ['鸡胸肉切 2cm 小块，加入生抽 5ml、淀粉 5g、清水 10ml，抓匀腌 8 分钟。','番茄切小块，蒜切末；西兰花切小朵，水开后焯 1 分 30 秒，捞出。','锅中放橄榄油 15ml，中火加热，放蒜末炒 10 秒。','放鸡胸肉，中火炒 3–4 分钟，炒到表面完全变白。','放番茄，中火炒 3 分钟，炒出汁。','加入鹰嘴豆、清水 80ml、生抽 5ml，煮 3 分钟。','加盐 1g、黑胡椒或香草，翻匀。','米饭装碗，放上番茄鸡胸鹰嘴豆，旁边配西兰花。'],
    note: '鸡胸肉切开不能有粉红色；孕妇这份保持清淡，爸爸可以在碗里额外加黑胡椒。'
  },
  {
    day: '周一', meal: '晚餐', title: '柠檬蒜香鳕鱼土豆锅 + 青菜', time: '28 分钟', tags: ['鱼类', '低汞鱼', '土豆'],
    ingredients: [['鳕鱼/鲈鱼','260g'],['土豆','1 个，约 300g'],['胡萝卜','半根，约 80g'],['绿叶菜','250g'],['蒜','3 瓣'],['柠檬汁','10ml'],['橄榄油','15ml'],['清水','250ml'],['盐','1.5g'],['黑胡椒/迷迭香','少量，可不放']],
    steps: ['土豆切 1.5cm 小块，胡萝卜切薄片。','鱼用厨房纸吸干水分，抹盐 0.5g 和柠檬汁 5ml，静置 5 分钟。','锅中放橄榄油 15ml，放蒜末炒香。','放土豆和胡萝卜，中火炒 2 分钟。','加清水 250ml，盖盖中火煮 10–12 分钟，直到土豆能被筷子戳透。','把鱼放在土豆上面，盖盖中火焖 7–9 分钟。','拨开鱼最厚处，鱼肉应完全变白、没有透明感。','加剩余柠檬汁和盐，撒一点黑胡椒或香草。','另起锅用 5ml 油清炒绿叶菜 2 分钟，加盐 0.5g。'],
    note: '鱼必须全熟；避免生鱼片、生腌和高汞大型鱼。'
  },
  {
    day: '周二', meal: '午餐', title: '橄榄油鸡肉土豆胡萝卜焖饭', time: '28 分钟', tags: ['鸡肉', '土豆', '盖饭'],
    ingredients: [['鸡胸肉/鸡腿肉','250g'],['土豆','1 个，约 250g'],['胡萝卜','半根，约 80g'],['洋葱','1/4 个，可不放'],['熟米饭/杂粮饭','350–450g'],['蒜','2 瓣'],['橄榄油','15ml'],['生抽','15ml'],['清水','200ml'],['淀粉','5g'],['盐','1g'],['意大利香草','少量，可不放']],
    steps: ['鸡肉切小块，加生抽 5ml、淀粉 5g，抓匀腌 8 分钟。','土豆切小块，胡萝卜切薄片，洋葱切小丁。','锅中放橄榄油 15ml，放洋葱和蒜末，中火炒 30 秒。','放鸡肉，中火炒 4 分钟，炒到表面变白。','放土豆和胡萝卜，炒 2 分钟。','加清水 200ml、生抽 10ml，盖盖中火焖 10–12 分钟。','土豆熟软后，加盐 1g 和少量香草。','留一点汤汁，盖在米饭上。'],
    note: '鸡腿肉更嫩；鸡胸肉则更清爽，记得不要切太大。'
  },
  {
    day: '周二', meal: '晚餐', title: '虾仁番茄全麦意面 + 青菜', time: '25 分钟', tags: ['虾仁', '全麦意面', '番茄'],
    ingredients: [['全麦意面','180g'],['虾仁','180g'],['番茄','2 个，约 300g'],['绿叶菜','150g'],['蒜','3 瓣'],['橄榄油','15ml'],['盐','2g，煮面水 1g，调味 1g'],['黑胡椒/意大利香草','少量，可不放']],
    steps: ['虾仁解冻，挑虾线，冲洗后吸干水分。','番茄切小块，蒜切末，青菜切段。','锅中加水烧开，放盐 1g，放全麦意面煮 8–10 分钟。','煮面同时，另起锅放橄榄油 15ml，放蒜末炒香。','放番茄，中火炒 4 分钟，炒成番茄汁。','放虾仁，煮 2–3 分钟，直到虾仁完全变粉红并卷曲。','放青菜煮 1 分钟，加盐 1g、黑胡椒或香草。','把煮好的意面捞入锅中，翻拌 1 分钟。'],
    note: '虾仁变色后再多煮 30 秒，孕妇吃更稳妥。'
  },
  {
    day: '周三', meal: '午餐', title: '牛肉白豆番茄盖饭', time: '25 分钟', tags: ['牛肉', '白豆', '盖饭'],
    ingredients: [['牛肉片','220g'],['熟白豆/芸豆','150g，罐头冲洗后用'],['番茄','2 个'],['胡萝卜','半根'],['熟米饭/杂粮饭','350–450g'],['蒜','2 瓣'],['橄榄油','15ml'],['生抽','15ml'],['清水','100ml'],['盐','1g']],
    steps: ['番茄切块，胡萝卜切薄片，蒜切末。','牛肉片提前解冻，用厨房纸吸一下水。','锅中放橄榄油 15ml，放蒜末炒香。','放番茄，中火炒 3 分钟，炒出汁。','放胡萝卜和白豆，炒 1 分钟。','加清水 100ml、生抽 15ml，煮 4 分钟。','放牛肉片，用筷子拨散，中火煮 2–3 分钟，直到完全变色。','加盐 1g，收汁 1 分钟，浇在米饭上。'],
    note: '牛肉片不要久煮，完全变色即可；孕妇这份仍以全熟为准。'
  },
  {
    day: '周三', meal: '晚餐', title: '西兰花鸡蛋鹰嘴豆炒饭', time: '20 分钟', tags: ['鸡蛋', '豆类', '炒饭'],
    ingredients: [['熟米饭/杂粮饭','400g'],['鸡蛋','2 个'],['熟鹰嘴豆','120g'],['西兰花','200g'],['蒜','2 瓣'],['橄榄油','15ml'],['生抽','10ml'],['盐','1g']],
    steps: ['西兰花切小朵，水开后焯 1 分 30 秒，捞出切碎一点。','鸡蛋打散。锅中放橄榄油 5ml，倒入蛋液。','鸡蛋炒到完全凝固，盛出。','原锅加橄榄油 10ml，放蒜末炒香。','放鹰嘴豆炒 1 分钟。','放米饭，用铲子压散，中火炒 3 分钟。','放西兰花和鸡蛋。','加生抽 10ml、盐 1g，大火翻炒 2 分钟，米饭完全热透后出锅。'],
    note: '冷藏米饭要彻底炒热；鸡蛋必须完全凝固。'
  },
  {
    day: '周四', meal: '午餐', title: '酸奶蒜香鸡胸土豆碗', time: '30 分钟', tags: ['鸡胸', '酸奶', '土豆'],
    ingredients: [['鸡胸肉','220g'],['土豆','1 个，约 300g'],['无糖酸奶','50g，正规巴氏杀菌产品'],['绿叶菜','150g'],['蒜','2 瓣'],['柠檬汁','5ml'],['橄榄油','15ml'],['淀粉','5g'],['盐','1.5g'],['熟米饭/杂粮饭','350–450g']],
    steps: ['鸡胸肉切小块。','加入酸奶 50g、蒜末一半、柠檬汁 5ml、淀粉 5g、盐 0.5g，抓匀腌 10 分钟。','土豆切 1.5cm 小块，水开后煮 6 分钟，捞出沥干。','平底锅放橄榄油 15ml，放土豆，中火煎 4 分钟。','放腌好的鸡胸肉，中火炒 5–6 分钟。','鸡胸肉切开没有粉红色后，加盐 1g。','青菜另起锅快炒，或焯水 1 分钟。','米饭装碗，放鸡胸、土豆和青菜。'],
    note: '酸奶只用于腌制，选择正规巴氏杀菌产品；鸡肉要炒熟。'
  },
  {
    day: '周四', meal: '晚餐', title: '三文鱼番茄土豆汤 + 米饭', time: '28 分钟', tags: ['鱼类', '汤', '番茄'],
    ingredients: [['三文鱼/鳕鱼','260g'],['番茄','2 个'],['土豆','1 个，约 250g'],['胡萝卜','半根'],['绿叶菜','100g'],['蒜','2 瓣'],['橄榄油','10ml'],['清水','700ml'],['盐','1.5g'],['柠檬汁','5ml，可不放'],['米饭','300–400g']],
    steps: ['鱼切大块，用厨房纸吸干水分。','番茄切块，土豆切小块，胡萝卜切薄片。','锅中放橄榄油 10ml，放蒜末炒香。','放番茄，中火炒 3 分钟。','加清水 700ml、土豆、胡萝卜。','盖盖中火煮 10–12 分钟。','土豆熟软后，放鱼块，中火煮 6–8 分钟。','放绿叶菜，煮 1 分钟。','加盐 1.5g 和柠檬汁；确认鱼肉完全熟透，没有透明感。'],
    note: '这顿是本周第二次鱼类，汤口比较清淡，适合晚餐。'
  },
  {
    day: '周五', meal: '午餐', title: '番茄鸡蛋鹰嘴豆盖饭', time: '20 分钟', tags: ['鸡蛋', '豆类', '快手'],
    ingredients: [['鸡蛋','2 个'],['熟鹰嘴豆','150g'],['番茄','2 个'],['洋葱','1/4 个，可不放'],['熟米饭/杂粮饭','350–450g'],['橄榄油','15ml'],['生抽','5ml'],['盐','1g']],
    steps: ['番茄切块，洋葱切小丁，鸡蛋打散。','锅中放橄榄油 5ml，倒入蛋液，炒到完全凝固，盛出。','原锅加橄榄油 10ml。','放洋葱炒 30 秒。','放番茄，中火炒 3 分钟。','放鹰嘴豆，加清水 50ml，煮 3 分钟。','放回鸡蛋。','加生抽 5ml、盐 1g，翻匀，盖在米饭上。'],
    note: '没有鹰嘴豆可用白豆/芸豆替代。'
  },
  {
    day: '周五', meal: '晚餐', title: '鸡肉番茄全麦意面 + 西兰花', time: '28 分钟', tags: ['鸡肉', '全麦意面', '西兰花'],
    ingredients: [['全麦意面','180g'],['鸡胸肉/鸡腿肉','220g'],['番茄','2 个'],['西兰花','150g'],['蒜','3 瓣'],['橄榄油','15ml'],['淀粉','5g'],['生抽','10ml'],['盐','2g']],
    steps: ['鸡肉切小丁，加生抽 5ml、淀粉 5g，抓匀腌 8 分钟。','番茄切块，西兰花切小朵。','水开后放盐 1g，煮全麦意面 8–10 分钟。','西兰花最后 2 分钟放进煮面锅一起煮，然后一起捞出。','另起锅放橄榄油 15ml，放蒜末炒香。','放鸡肉，中火炒 5 分钟。','放番茄，中火炒 4 分钟，炒出汁。','放煮好的意面和西兰花，加生抽 5ml、盐 1g，翻炒 1 分钟。','鸡肉切开确认无粉红色后出锅。'],
    note: '这道是周二虾仁意面的鸡肉版，食材复用，备菜成本低。'
  },
  {
    day: '周六', meal: '午餐', title: '香草鸡胸土豆西兰花煎锅', time: '28 分钟', tags: ['鸡胸', '煎锅', '香草'],
    ingredients: [['鸡胸肉','220g'],['土豆','1 个，约 300g'],['西兰花','200g'],['蒜','3 瓣'],['橄榄油','20ml'],['生抽','10ml'],['淀粉','5g'],['盐','1g'],['黑胡椒/迷迭香','少量，可不放']],
    steps: ['鸡胸肉切小块，加生抽 5ml、淀粉 5g，抓匀腌 8 分钟。','土豆切 0.5cm 薄片，西兰花切小朵。','水开后放土豆片煮 3 分钟，捞出。','西兰花焯 1 分 30 秒，捞出。','平底锅放橄榄油 20ml。','放土豆片，中火煎 4–5 分钟，煎到微黄。','放蒜末和鸡胸肉，中火炒 5 分钟。','放西兰花，加生抽 5ml、盐 1g、黑胡椒或香草。','翻炒 1 分钟，确认鸡胸完全熟透后出锅。'],
    note: '土豆先煮再煎，比直接生煎稳定很多。'
  },
  {
    day: '周六', meal: '晚餐', title: '牛肉番茄白豆汤 + 米饭', time: '25 分钟', tags: ['牛肉', '白豆', '汤'],
    ingredients: [['牛肉片','200g'],['熟白豆/芸豆','150g'],['番茄','2 个'],['胡萝卜','半根'],['洋葱','1/4 个，可不放'],['清水','700ml'],['橄榄油','10ml'],['生抽','10ml'],['盐','1.5g'],['米饭','300–400g']],
    steps: ['番茄切块，胡萝卜切薄片，洋葱切丁。','锅中放橄榄油 10ml。','放洋葱炒 30 秒。','放番茄，中火炒 3 分钟。','放胡萝卜和白豆。','加清水 700ml、生抽 10ml。','中火煮 8 分钟。','放牛肉片，用筷子拨散。','煮 2–3 分钟，直到牛肉完全变色。','加盐 1.5g，配米饭吃。'],
    note: '汤菜一锅出，周六晚不想复杂做饭时很方便。'
  },
  {
    day: '周日', meal: '午餐', title: '土豆西兰花鸡蛋厚蛋饼 + 青菜汤', time: '25 分钟', tags: ['鸡蛋', '西兰花', '轻食'],
    ingredients: [['鸡蛋','3 个'],['土豆','1 个，约 250g'],['西兰花','150g'],['绿叶菜','150g'],['蒜','1 瓣'],['橄榄油','15ml'],['盐','1.5g'],['清水','500ml']],
    steps: ['土豆切薄片，西兰花切小朵。','水开后土豆煮 4 分钟，西兰花煮 1 分 30 秒，捞出。','鸡蛋打散，加盐 0.8g。','平底锅放橄榄油 15ml。','放土豆片，小火铺平。','放西兰花，倒入蛋液。','盖盖小火煎 5–6 分钟。','不熟练翻面就不用翻，保持小火多煎 2–3 分钟，直到蛋液完全凝固。','另起锅加清水 500ml，水开后放绿叶菜煮 1 分钟，加盐 0.7g。'],
    note: '孕妇那份蛋饼必须完全凝固，不能有流心。'
  },
  {
    day: '周日', meal: '晚餐', title: '番茄土豆白豆炖菜 + 米饭', time: '28 分钟', tags: ['白豆', '番茄', '素食'],
    ingredients: [['熟白豆/芸豆','180g'],['番茄','2 个'],['土豆','1 个，约 250g'],['胡萝卜','半根，可不放'],['蒜','2 瓣'],['橄榄油','15ml'],['清水','350ml'],['生抽','10ml'],['盐','1.2g'],['米饭','350–450g']],
    steps: ['番茄切块，土豆切 1.5cm 小块，胡萝卜切薄片。','锅中放橄榄油 15ml。','放蒜末炒香。','放番茄，中火炒 3–4 分钟，炒出汁。','放土豆、胡萝卜、白豆。','加清水 350ml、生抽 10ml。','盖盖中火煮 12 分钟。','土豆能戳透后，加盐 1.2g。','开盖再煮 2 分钟，让汤汁稍微浓一点，配米饭吃。'],
    note: '这顿是豆类蛋白为主，轻负担，也适合清冰箱。'
  }
];

const shopping = {
  weekend: [
    {title:'蛋白质', items:[['鸡胸肉/鸡腿肉','1.1–1.2kg','分 5 袋：200g、250g、220g、220g、220g'],['牛肉片','450g','分 2 袋：220g、200g'],['鳕鱼/鲈鱼','260g','周一晚用'],['三文鱼/鳕鱼','260g','可周三补买；若周末买，冷冻'],['虾仁','180g','周二晚用'],['鸡蛋','8–10 个','一周够用'],['鹰嘴豆罐头','2 罐','沥干后每罐约 220–250g'],['白豆/芸豆罐头','2 罐','可替换成鹰嘴豆']]},
    {title:'主食', items:[['大米/杂粮米/糙米','2kg 左右','盖饭、炒饭、配汤'],['全麦意面','1 包，约 500g','周二晚、周五晚'],['土豆','6–7 个，约 1.6–2kg','多顿复用']]},
    {title:'耐放蔬菜和调味', items:[['番茄','8 个','周一到周三 + 部分后续'],['胡萝卜','3 根','焖菜、汤'],['洋葱','2 个','地中海底味，可不放'],['蒜','2 头','几乎每顿都用'],['柠檬','2 个','鱼、鸡肉、酸奶腌制'],['橄榄油','1 瓶','主要用油'],['意大利综合香草/牛至/迷迭香','1 小瓶','可选，但很提风味'],['黑胡椒','1 小瓶','可选'],['无糖酸奶','100–150g','周四午餐腌鸡肉，选正规巴氏杀菌产品']]},
    {title:'周一到周三新鲜蔬菜', items:[['西兰花','1 大颗，约 500g','周一午、周三晚'],['绿叶菜','500g','周一晚、周二晚']]}
  ],
  midweek: [
    {title:'周四到周日新鲜蔬菜', items:[['番茄','8 个','周四晚、周五、周六晚、周日晚'],['西兰花','1 大颗，约 500g','周五晚、周六午、周日午'],['绿叶菜','500g','周四晚、周日午汤'],['柠檬','1 个','可选，补风味']]},
    {title:'新鲜蛋白质', items:[['三文鱼/鳕鱼','260g','周四晚'],['无糖酸奶','1 小杯','如果周末买的已用完'],['鸡蛋','4–6 个','如果家里鸡蛋消耗快']]}
  ]
};

const days = ['周一','周二','周三','周四','周五','周六','周日'];
const filterLabels = [
  ['all','全部'],['午餐','午餐'],['晚餐','晚餐'],['鱼','鱼类'],['鸡','鸡肉'],['豆','豆类'],['快手','快手']
];

const state = {filter:'all', query:'', selected:0};
const $ = id => document.getElementById(id);
const escapeHtml = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll('\'','&#039;');

function recipeMatches(recipe){
  const q = state.query.trim().toLowerCase();
  const haystack = [recipe.day, recipe.meal, recipe.title, recipe.tags.join(' '), recipe.ingredients.flat().join(' '), recipe.steps.join(' ')].join(' ').toLowerCase();
  const byQuery = !q || haystack.includes(q);
  const f = state.filter;
  const byFilter = f === 'all' || recipe.meal === f || recipe.title.includes(f) || recipe.tags.some(t => t.includes(f));
  return byQuery && byFilter;
}

function renderTabs(){
  const html = filterLabels.map(([key,label]) => `<button class='tab ${state.filter===key?'active':''}' data-filter='${key}'>${label}</button>`).join('');
  $('desktopTabs').innerHTML = html;
  $('mobileTabs').innerHTML = html;
  document.querySelectorAll('[data-filter]').forEach(btn => btn.onclick = () => {
    state.filter = btn.dataset.filter;
    renderAll();
  });
}

function renderShopping(containerId, groups){
  const container = $(containerId);
  container.innerHTML = groups.map((group, idx) => `
    <div class='shopping-group ${idx===0?'open':''}'>
      <button class='shopping-head' type='button'>
        <span>${escapeHtml(group.title)}</span><span>⌄</span>
      </button>
      <div class='shopping-body'>
        ${group.items.map(item => `<div class='shopping-item'><div><b>${escapeHtml(item[0])}</b><small>${escapeHtml(item[2])}</small></div><span>${escapeHtml(item[1])}</span></div>`).join('')}
      </div>
    </div>`).join('');
  container.querySelectorAll('.shopping-head').forEach(btn => btn.onclick = () => btn.parentElement.classList.toggle('open'));
}

function renderRecipes(){
  const wrap = $('recipeList');
  let html = '';
  const filtered = recipes.map((r,i)=>({...r, index:i})).filter(recipeMatches);
  days.forEach(day => {
    const list = filtered.filter(r => r.day === day);
    if(!list.length) return;
    html += `<div class='section-title'>${day}</div><div class='menu-grid'>`;
    html += list.map(r => `
      <button class='recipe-card ${state.selected===r.index?'active':''}' data-recipe='${r.index}' type='button'>
        <div>
          <div class='recipe-top'><div><div class='day'>${r.day} · ${r.meal}</div><div class='recipe-name'>${escapeHtml(r.title)}</div></div><span class='meal-badge'>${r.meal}</span></div>
          <div class='meta-row'>${r.tags.map(tag => `<span class='tag'>${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
        <div class='hint'>⏱ ${escapeHtml(r.time)} · 点击查看详细步骤</div>
      </button>`).join('');
    html += '</div>';
  });
  wrap.innerHTML = html || `<div class='note'>没有匹配的菜谱，换个关键词试试。</div>`;
  wrap.querySelectorAll('[data-recipe]').forEach(card => card.onclick = () => showRecipe(Number(card.dataset.recipe), true));
}

function detailHtml(recipe){
  return `
    <div class='detail-header'>
      <div class='kicker'>${recipe.day} · ${recipe.meal}</div>
      <h2>${escapeHtml(recipe.title)}</h2>
      <div class='detail-meta'><span class='pill'>⏱ ${escapeHtml(recipe.time)}</span>${recipe.tags.map(tag => `<span class='pill'>${escapeHtml(tag)}</span>`).join('')}</div>
    </div>
    <div class='detail-block'>
      <h3>食材用量｜2 人份</h3>
      <div class='ingredients'>${recipe.ingredients.map(([name, amount]) => `<div class='ingredient'><span>${escapeHtml(name)}</span><span>${escapeHtml(amount)}</span></div>`).join('')}</div>
    </div>
    <div class='detail-block'>
      <h3>烹饪步骤</h3>
      <div class='steps'>${recipe.steps.map(step => `<div class='step'><div>${escapeHtml(step)}</div></div>`).join('')}</div>
    </div>
    <div class='detail-block'><div class='note'><b>孕妇提醒：</b>${escapeHtml(recipe.note)}</div></div>
  `;
}

function showRecipe(index, openDrawer){
  state.selected = index;
  const recipe = recipes[index];
  $('detail').innerHTML = detailHtml(recipe);
  $('drawerBody').innerHTML = detailHtml(recipe);
  renderRecipes();
  if(openDrawer && window.matchMedia('(max-width:1180px)').matches){
    $('drawer').classList.add('open');
    $('scrim').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer(){
  $('drawer').classList.remove('open');
  $('scrim').classList.remove('open');
  document.body.style.overflow = '';
}

function copyShopping(){
  const lines = [];
  lines.push('周末大采购');
  shopping.weekend.forEach(g => { lines.push('\n' + g.title); g.items.forEach(i => lines.push(`- ${i[0]}：${i[1]}（${i[2]}）`)); });
  lines.push('\n周三晚/周四早补采购');
  shopping.midweek.forEach(g => { lines.push('\n' + g.title); g.items.forEach(i => lines.push(`- ${i[0]}：${i[1]}（${i[2]}）`)); });
  navigator.clipboard?.writeText(lines.join('\n'));
  const btn = $('copyBtn');
  const old = btn.textContent;
  btn.textContent = '已复制';
  setTimeout(()=>btn.textContent = old, 1200);
}

function renderAll(){
  renderTabs();
  renderRecipes();
}

function init(){
  renderShopping('weekendShopping', shopping.weekend);
  renderShopping('midweekShopping', shopping.midweek);
  $('search').addEventListener('input', e => { state.query = e.target.value; renderRecipes(); });
  $('mobileSearch').addEventListener('input', e => { state.query = e.target.value; $('search').value = e.target.value; renderRecipes(); });
  $('copyBtn').onclick = copyShopping;
  $('printBtn').onclick = () => window.print();
  $('closeDrawer').onclick = closeDrawer;
  $('scrim').onclick = closeDrawer;
  renderAll();
  showRecipe(0, false);
}

init();