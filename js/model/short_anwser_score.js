function ShortAnswerScore(name, standardAnswer, score) {
  Question.call(this, name, standardAnswer, score);
}

ShortAnswerScore.prototype = Object.create(Question.prototype);
ShortAnswerScore.prototype.constructor = ShortAnswerScore;

ShortAnswerScore.prototype.calculate = function (inputAnwser) {
  var string;
  for (var i = 0; i < inputAnwser.length; i++) {
    string = inputAnwser[i].value;
  }
  return this.standardAnswer === string ? this.score : 0;
};
