function FillAnwserScore(name, standardAnswer, score) {
  Question.call(this, name, standardAnswer, score);
}

FillAnwserScore.prototype = Object.create(Question.prototype);
FillAnwserScore.prototype.constructor = FillAnwserScore;

FillAnwserScore.prototype.calculate = function (inputAnwser) {
  var score = 0;
  var answers = [];
  for (var i = 0; i < inputAnwser.length; i++) {
    answers.push(inputAnwser[i].value);
  }
  _this = this;
  _.forEach(_this.standardAnswer, function(array) {
    if(_.contains(answers, array)) {
      score += _this.score;
    }
  });
  return score;
};
