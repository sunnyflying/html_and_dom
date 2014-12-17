function acount() {
  var total = 0;
  var questions = new Questions();

  var totalSelect = SelectAnwserScore.acountTotalSelect();
  var totalMoreSelete = MoreSelectAnwserScore.acountTotalMoreSelect();
  var totalJudge = JudgeAnwserScore.acountTotalJudge();

  //
  // var totalFill = FillAnwserScore.acountFillScore();
  //
  // var totalShort = ShortAnwserScore.acountShortScore();
  //

  //
  total = totalSelect + totalMoreSelete + totalJudge;
  //
  document.getElementById("print").innerHTML = total;

  // return false;
}
