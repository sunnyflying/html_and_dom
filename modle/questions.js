function Question(name, standardAnswer, score){
  this.name = name;
  this.standardAnswer = standardAnswer;
  this.score = score;
}

Question.all = function() {
  return loadStandardAnwserAndScore();
};

Question.prototype.calculate = function () {

};
