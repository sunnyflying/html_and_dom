function MoreSelectAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

MoreSelectAnwserScore.prototype = Object.create(Questions.prototype);
MoreSelectAnwserScore.prototype.constructor = MoreSelectAnwserScore;

MoreSelectAnwserScore.prototype.acountSelectScore = function() {
  var array = [];
  var total = 0;
  var moreSeleteAnwsers = document.getElementsByName(this.no);

  _.forEach(moreSeleteAnwsers, function(moreSeleteAnwser) {
    if (moreSeleteAnwser.checked === true) {
      array.push(moreSeleteAnwser.value);
    }
  });

  if (array.toString() === this.anwser) {
    total = this.score;
  }

  return total;
};

MoreSelectAnwserScore.acountTotalMoreSelect = function() {
  var totalMoreSelect = 0;
  var AllMoreSelectAnwserScores = loadMoreSelectAnwserScore();
  _.forEach(AllMoreSelectAnwserScores, function(AllMoreSelectAnwserScore) {
    var moreSelectAnwserScore = new MoreSelectAnwserScore(AllMoreSelectAnwserScore.no, AllMoreSelectAnwserScore.anwser, AllMoreSelectAnwserScore.score);
    totalMoreSelect += moreSelectAnwserScore.acountSelectScore();
  });

  return totalMoreSelect;
};
