function acount() {
  var total = 0;
  var questions = new Questions();

  var totalSelect = SelectAnwserScore.acountTotalSelect();
  var totalMoreSelete = MoreSelectAnwserScore.acountTotalMoreSelect();
  var totalJudge = JudgeAnwserScore.acountTotalJudge();
  var totalFill = FillAnwserScore.acountTotalFill();
  var totalShort = ShortAnwserScore.acountTotalShort();

  total = totalSelect + totalMoreSelete + totalJudge + totalFill + totalShort;

  document.getElementById("print").innerHTML = total;

  // return false;
}
