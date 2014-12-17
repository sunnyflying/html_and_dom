function Questions(no, anwser, score) {
  this.no = no;
  this.anwser = anwser;
  this.score = score;
}

Questions.prototype.acountSelectScore = function() {
  var total = 0;
  var input = document.getElementsByName(this.no);

  for (var i = 0; i < input.length; i++) {
    if (input[i].checked === true && input[i].value === this.anwser) {
      total = this.score;
    }
  }
  return total;
};

Questions.prototype.acountInputScore = function() {
  var total = 0;
  var inputAnwsers = [];
  var input = document.getElementById(this.no);

  for (var j = 0; j < input.length; j++) {
    var inputAnwser = _.contains(inputAnwsers, input.value);
    if(!inputAnwser) {
      inputAnwsers.push(input.value);
    }
  }
  for (var i = 0; i < inputAnwsers.length; i++) {
    if(_.contains(this.anwser, inputAnwsers[i])) {
      total += this.score;
    }
  }
  return total;
};
