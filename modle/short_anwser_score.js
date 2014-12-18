function ShortAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

ShortAnwserScore.prototype = Object.create(Questions.prototype);
ShortAnwserScore.prototype.constructor = ShortAnwserScore;

ShortAnwserScore.acountTotalShort = function() {
  var totalShort = 0;
  var AllShortAnwserScores = loadShortAnwserScore();

  _.forEach(AllShortAnwserScores, function(AllShortAnwserScore) {
    var shortAnwserScore = new ShortAnwserScore(AllShortAnwserScore.no, AllShortAnwserScore.anwser, AllShortAnwserScore.score);
    totalShort += shortAnwserScore.acountInputScore();
  });

  return totalShort;
};
