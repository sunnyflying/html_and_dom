function MultipleChoiceAnwserScore(name, standardAnswer, score) {
  Question.call(this, name, standardAnswer, score);
}

MultipleChoiceAnwserScore.prototype = Object.create(Question.prototype);
MultipleChoiceAnwserScore.prototype.constructor = MultipleChoiceAnwserScore;

MultipleChoiceAnwserScore.prototype.calculate = function (inputAnwser) {

  var value = [];

  _.forEach(inputAnwser,function(select){
    if(select.checked) {
      value.push(select.value);
    }
  });

  return this.standardAnswer === value.toString() ? this.score : 0;
};
