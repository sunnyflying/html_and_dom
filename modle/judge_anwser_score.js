function JudgeAnwserScore(no, anwser, score) {
  Questions.call(this, no, anwser);
  this.score = score;
}

JudgeAnwserScore.prototype = Object.create(Questions.prototype);
JudgeAnwserScore.prototype.constructor = JudgeAnwserScore;

JudgeAnwserScore.acountTotalJudge = function() {
  var totalJudge = 0;
  var AllJudgeAnwserScores = loadJudgeAnwserScore();

  _.forEach(AllJudgeAnwserScores, function(AllJudgeAnwserScore) {
    var judgeAnwserScore = new Questions(AllJudgeAnwserScore.no, AllJudgeAnwserScore.anwser, AllJudgeAnwserScore.score);
    totalJudge += judgeAnwserScore.acountSelectScore();
  });

  return totalJudge;
};
