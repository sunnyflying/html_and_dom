function SelectAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

SelectAnwserScore.prototype = Object.create(Questions.prototype);
SelectAnwserScore.prototype.constructor = SelectAnwserScore;

SelectAnwserScore.acountTotalSelect = function() {
  var totalSelect = 0;

  var AllSelectAnwserScore = loadSelectAnwserScore();

  for (var i = 0; i < AllSelectAnwserScore.length; i++) {
    var selectAnwserScore = new SelectAnwserScore(AllSelectAnwserScore[i].no, AllSelectAnwserScore[i].anwser, AllSelectAnwserScore[i].score);
    totalSelect += selectAnwserScore.acountSelectScore();
  }
  return totalSelect;
};
