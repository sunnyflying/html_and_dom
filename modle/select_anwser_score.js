function SelectAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

SelectAnwserScore.prototype = Object.create(Questions.prototype);
SelectAnwserScore.prototype.constructor = SelectAnwserScore;

SelectAnwserScore.acountTotalSelect = function() {
  var totalSelect = 0;

  var AllSelectAnwserScores = loadSelectAnwserScore();

  _.forEach(AllSelectAnwserScores, function(AllSelectAnwserScore) {
    var selectAnwserScore = new Questions(AllSelectAnwserScore.no, AllSelectAnwserScore.anwser, AllSelectAnwserScore.score);
    totalSelect += selectAnwserScore.acountSelectScore();
  });

  return totalSelect;
};
