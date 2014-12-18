function FillAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

FillAnwserScore.prototype = Object.create(Questions.prototype);
FillAnwserScore.prototype.constructor = FillAnwserScore;

FillAnwserScore.acountTotalFill = function() {
  var totalFill = 0;

  var AllFillAnwserScores = loadFillAnwserScore();

  _.forEach(AllFillAnwserScores, function(AllFillAnwserScore) {
    var fillAnwserScore = new FillAnwserScore(AllFillAnwserScore.no, AllFillAnwserScore.anwser, AllFillAnwserScore.score);
    totalFill += fillAnwserScore.acountInputScore();
  });

  return totalFill;
};
