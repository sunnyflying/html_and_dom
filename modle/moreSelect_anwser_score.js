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

  for (var i = 0; i < moreSeleteAnwsers.length; i++) {
    if (moreSeleteAnwsers[i].checked === true) {
      array.push(moreSeleteAnwsers[i].value);
    }
  }

  if (array.toString() === this.anwser) {
    total = this.score;
  }

  return total;
};

MoreSelectAnwserScore.acountTotalMoreSelect = function() {
  var totalMoreSelect = 0;

  var AllMoreSelectAnwserScore = loadMoreSelectAnwserScore();

  for (var i = 0; i < AllMoreSelectAnwserScore.length; i++) {
    var moreSelectAnwserScore = new MoreSelectAnwserScore(AllMoreSelectAnwserScore[i].no, AllMoreSelectAnwserScore[i].anwser, AllMoreSelectAnwserScore[i].score);
    totalMoreSelect += moreSelectAnwserScore.acountSelectScore();
  }
  return totalMoreSelect;
};
