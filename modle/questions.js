function Question(name, standardAnswer, scorce){
  this.name = name;
  this.standardAnswer = standardAnswer;
  this.scorce = scorce;
}

Question.all = function() {
  return loadStandardAnwserAndScore();
};

Question.prototype.calculate = function () {

};
