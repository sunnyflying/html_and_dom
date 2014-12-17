function Questions(no, anwser, score) {
  this.no = no;
  this.anwser = anwser;
  this.score = score;
}

Questions.prototype.acountSelectScore = function() {
  var total = 0;
  var selects = document.getElementsByName(this.no);

  _.forEach(selects, function(select) {
    if (select.checked === true && select.value === this.anwser) {
      total = this.score;
    }
  });

  return total;
};

Questions.prototype.acountInputScore = function() {
  var total = 0;
  var inputAnwsers = [];
  var nos = this.no;

  _.forEach(nos, function(no) {
    var inputAnwser = _.contains(inputAnwsers, document.getElementById(no).value);
    if(!inputAnwser) {
      inputAnwsers.push(document.getElementById(no).value);
    }
  });

  _.forEach(inputAnwsers, function(inputAnwser) {
    if(inputAnwser !== '') {
      if(_.contains(this.anwser, inputAnwser) || inputAnwser === this.anwser) {
        total += this.score;
      }
    }
  });

  return total;
};
