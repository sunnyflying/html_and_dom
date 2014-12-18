function loadStandardAnwserAndScore() {
  return [
    new JudgeAnwserScore("true_false_1","X", 10),
    new JudgeAnwserScore("true_false_2","V", 10),
    new MultipleChoiceAnwserScore("multiple_choice_1","A,B,D", 10),
    new MultipleChoiceAnwserScore("multiple_choice_2","A,B,C", 10),
    new ChoiceAnwserScore("choice_1","B", 10),
    new ChoiceAnwserScore("choice_2","C", 10),
    new FillAnwserScore("fill_in_1", ["统一建模语言"], 5),
    new FillAnwserScore("fill_in_2", [
      "封装性",
      "继承性",
      "多态性"
      ], 5),
    new ShortAnswerScore("short_answer_1" , "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。", 20)
  ];
}
