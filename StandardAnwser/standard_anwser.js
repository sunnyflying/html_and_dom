function loadFillAnwserScore() {
  return [
  new FillAnwserScore(["UML"],"统一建模语言", 15),
  new FillAnwserScore(["object1","object2","object3"], [
    "封装性",
    "继承性",
    "多态性"
    ], 5)
  ];
}

function loadSelectAnwserScore() {
  return [
      new SelectAnwserScore("selete1","b", 5),
      new SelectAnwserScore("selete2","c", 5)
    ];
}

function loadMoreSelectAnwserScore() {
  return [
      new MoreSelectAnwserScore("duoselete1","a,b,d", 10),
      new MoreSelectAnwserScore("duoselete2","a,b,c", 10)
    ];
}

function loadJudgeAnwserScore() {
  return [
      new JudgeAnwserScore("judge1","false", 10),
      new JudgeAnwserScore("judge2","true", 10)
    ];
}

function loadShortAnwserScore() {
  return [
  new ShortAnwserScore(["ask"], "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。", 20)
  ];
}
