function fillAnwserScore(name, standardAnswer, scorce) {
  Question.call(this, name, standardAnswer, scorce);
}

fillAnwserScore.prototype = Object.create(Question.prototype);
fillAnwserScore.prototype.constructor = fillAnwserScore;

fillAnwserScore.prototype.calculate = function (inputAnwser) {
  var scorce = 0;
  var answers = [];
  for (var i = 0; i < inputAnwser.length; i++) {
    answers.push(inputAnwser[i].value);
  }
  _this = this;
  _.forEach(this.standardAnswer, function(array) {
    if(_.contains(answers, array)) {
      scorce += _this.scorce;
    }
  });
  return scorce;
};
