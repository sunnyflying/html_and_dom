function ChoiceAnwserScore(name, standardAnswer, scorce) {
  Question.call(this, name, standardAnswer, scorce);
}

ChoiceAnwserScore.prototype = Object.create(Question.prototype);
ChoiceAnwserScore.prototype.constructor = ChoiceAnwserScore;

ChoiceAnwserScore.prototype.countScorce = function (inputAnwser) {
  var radio = _.find(inputAnwser, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.standardAnswer === radioValue ? this.scorce : 0;
};
