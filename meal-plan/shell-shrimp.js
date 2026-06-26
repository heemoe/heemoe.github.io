// Replace Tuesday dinner with a simple Mediterranean-style shell-on shrimp meal.
recipes[3] = {
  day: '周二',
  meal: '晚餐',
  title: '柠檬蒜香番茄带壳虾 + 杂粮饭 + 青菜',
  time: '25 分钟',
  tags: ['带壳虾', '番茄', '一锅菜'],
  ingredients: [
    ['带壳鲜虾', '400g，约 12–16 只'],
    ['番茄', '2 个，约 300g'],
    ['绿叶菜', '200g'],
    ['熟杂粮饭/米饭', '300–400g'],
    ['蒜', '3 瓣'],
    ['柠檬汁', '15ml，约半个柠檬'],
    ['橄榄油', '15ml'],
    ['清水', '80ml'],
    ['盐', '1g'],
    ['黑胡椒/意大利香草', '少量，可不放']
  ],
  steps: [
    '处理鲜虾：用厨房剪刀剪掉虾须和尖刺；保留虾壳，从虾背剪开一道口，挑出虾线。用流动水快速冲洗后沥干，并用厨房纸吸去表面水分。',
    '番茄洗净切成约 2cm 小块；蒜切末；绿叶菜洗净沥干。',
    '锅中放橄榄油 15ml，中火加热约 30 秒，放蒜末炒 10–15 秒，闻到香味即可，不要炒焦。',
    '放入带壳虾，保持中火，每面煎约 1 分 30 秒，共煎 3 分钟，直到虾壳大部分变红。',
    '把虾推到锅边，放入番茄，中火炒 3 分钟，用铲子轻压番茄，让它充分出汁。',
    '加入清水 80ml、盐 1g 和少量意大利香草，翻匀后盖上锅盖，中火焖 3 分钟。',
    '打开锅盖翻动鲜虾，再焖 1–2 分钟。确认所有虾壳完全变红、虾肉呈不透明白色，最厚处没有灰色或半透明部分。',
    '关火后淋入柠檬汁 15ml，轻轻翻匀。柠檬汁最后放，味道更清新。',
    '另起锅放少量油，绿叶菜大火炒 2 分钟；或者用沸水焯 1 分钟。与杂粮饭一起装盘。'
  ],
  note: '孕妇这份必须彻底熟透，不吃生腌或半熟虾。建议剥壳后食用；虾头和内脏部分不作为主要食用部位。'
};

// Keep the shopping list consistent with the new recipe.
const weekendProteinGroup = shopping.weekend.find(group => group.title === '蛋白质');
if (weekendProteinGroup) {
  const shrimpIndex = weekendProteinGroup.items.findIndex(item => item[0].includes('虾仁'));
  const shellOnShrimpItem = ['带壳鲜虾', '400g，约 12–16 只', '周二晚用；买回后冷藏，当天或第二天吃'];
  if (shrimpIndex >= 0) {
    weekendProteinGroup.items[shrimpIndex] = shellOnShrimpItem;
  } else {
    weekendProteinGroup.items.push(shellOnShrimpItem);
  }
}

// Re-render the page after applying the data update.
renderShopping('weekendShopping', shopping.weekend);
renderShopping('midweekShopping', shopping.midweek);
renderAll();
showRecipe(state.selected, false);
