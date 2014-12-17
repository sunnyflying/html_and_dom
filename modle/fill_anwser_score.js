function FillAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

FillAnwserScore.prototype = Object.create(Questions.prototype);
FillAnwserScore.prototype.constructor = FillAnwserScore;

FillAnwserScore.acountTotalFill = function() {
  var totalFill = 0;

  var AllFillAnwserScore = loadFillAnwserScore();

  for (var i = 0; i < AllFillAnwserScore.length; i++) {
    var fillAnwserScore = new FillAnwserScore(AllFillAnwserScore[i].no, AllFillAnwserScore[i].anwser, AllFillAnwserScore[i].score);
    totalFill += fillAnwserScore.acountInputScore();
  }
  return totalFill;
};
