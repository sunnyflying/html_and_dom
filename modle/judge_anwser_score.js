function judgeAnwserScore(name, standardAnswer, scorce) {
  Question.call(this, name, standardAnswer, scorce);
}

judgeAnwserScore.prototype = Object.create(Question.prototype);
judgeAnwserScore.prototype.constructor = judgeAnwserScore;

judgeAnwserScore.prototype.calculate = function (inputAnwser) {
  var radio = _.find(inputAnwser, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.standardAnswer === radioValue ? this.scorce : 0;
};
