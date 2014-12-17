function acount() {
  var total = 0;
  var questions = new Questions();

  var totalSelect = SelectAnwserScore.acountTotalSelect();
  var totalMoreSelete = MoreSelectAnwserScore.acountTotalMoreSelect();
  var totalJudge = JudgeAnwserScore.acountTotalJudge();
  var totalFill = FillAnwserScore.acountTotalFill();


  //
  // var totalShort = ShortAnwserScore.acountShortScore();
  //

  //
  total = totalSelect + totalMoreSelete + totalJudge + totalFill;
  //
  document.getElementById("print").innerHTML = total;

  // return false;
}
