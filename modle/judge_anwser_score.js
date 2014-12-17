function JudgeAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

JudgeAnwserScore.prototype = Object.create(Questions.prototype);
JudgeAnwserScore.prototype.constructor = JudgeAnwserScore;

JudgeAnwserScore.acountTotalJudge = function() {
  var totalJudge = 0;

  var AllJudgeAnwserScore = loadJudgeAnwserScore();

  for (var i = 0; i < AllJudgeAnwserScore.length; i++) {
    var judgeAnwserScore = new JudgeAnwserScore(AllJudgeAnwserScore[i].no, AllJudgeAnwserScore[i].anwser, AllJudgeAnwserScore[i].score);
    totalJudge += judgeAnwserScore.acountSelectScore();
  }
  return totalJudge;
};
