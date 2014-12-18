function ChoiceAnwserScore(name, standardAnswer, score) {
  Question.call(this, name, standardAnswer, score);
}

ChoiceAnwserScore.prototype = Object.create(Question.prototype);
ChoiceAnwserScore.prototype.constructor = ChoiceAnwserScore;

ChoiceAnwserScore.prototype.calculate = function (inputAnwser) {
  var radio = _.find(inputAnwser, { checked: true });
  var radioValue = radio ? radio.value : '';

  return this.standardAnswer === radioValue ? this.score : 0;
};
