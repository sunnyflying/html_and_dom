function loadStandardAnwserAndScore() {
  return [
    new JudgeAnwserScore("true_false_1","false", 10),
    new JudgeAnwserScore("true_false_2","true", 10),
    new MultipleChoiceAnwserScore("multiple_choice_1","a,b,d", 10),
    new MultipleChoiceAnwserScore("multiple_choice_2","a,b,c", 10),
    new SelectAnwserScore("choice_1","b", 5),
    new SelectAnwserScore("choice_2","c", 5),
    new FillAnwserScore("fill_in_1",["统一建模语言"], 15),
    new FillAnwserScore("fill_in_2", [
      "封装性",
      "继承性",
      "多态性"
      ], 5),
    new ShortAnwserScore("short_answer_1" , "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。", 20)
  ];
}
