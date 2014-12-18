function MultipleChoice(name, standardAnswer, scorce) {
  Question.call(this, name, standardAnswer, scorce);
}

MultipleChoice.prototype = Object.create(Question.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.calculate = function (inputAnwser) {

  var value = [];

  _.forEach(inputAnwser,function(select){
    if(select.checked) {
      value.push(select.value);
    }
  });

  return this.standardAnswer === value.toString() ? this.scorce : 0;
};
