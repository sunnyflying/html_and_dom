function ShortAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

ShortAnwserScore.prototype = Object.create(Questions.prototype);
ShortAnwserScore.prototype.constructor = ShortAnwserScore;

ShortAnwserScore.acountTotalShort = function() {
  var totalShort = 0;

  var AllShortAnwserScore = loadShortAnwserScore();

  for (var i = 0; i < AllShortAnwserScore.length; i++) {
    var shortAnwserScore = new Questions(AllShortAnwserScore[i].no, AllShortAnwserScore[i].anwser, AllShortAnwserScore[i].score);
    totalShort += shortAnwserScore.acountInputScore();
  }
  return totalShort;
};
