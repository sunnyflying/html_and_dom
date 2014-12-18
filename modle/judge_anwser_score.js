function JudgeAnwserScore(name, standardAnswer, score) {
  Question.call(this, name, standardAnswer, score);
}

JudgeAnwserScore.prototype = Object.create(Question.prototype);
JudgeAnwserScore.prototype.constructor = JudgeAnwserScore;

JudgeAnwserScore.prototype.calculate = function (inputAnwser) {
  var radio = _.find(inputAnwser, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.standardAnswer === radioValue ? this.score : 0;
};
