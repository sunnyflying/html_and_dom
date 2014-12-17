function FillAnwserScore() {
  this.anwser = anwser;
  this.score = score;
}

FillAnwserScore.prototype.acountFillScore = function(inputFill){
  var total = 0;
  var inputAnwsers = [];
  for (var j = 0; j < inputFill.length; j++) {
    var inputAnwser = _.contains(inputAnwsers, document.getElementById(inputFill[j]).value);
    if(!inputAnwser) {
      inputAnwsers.push(document.getElementById(inputFill[j]).value);
    }
  }
  for (var i = 0; i < inputAnwsers.length; i++) {
    if(_.contains(corret, inputAnwsers[i])) {
      total += this.score;
    }
  }
  return total;
};
