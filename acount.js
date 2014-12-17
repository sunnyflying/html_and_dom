function acount() {
  var total = 0;
  judgeNull();
  var totalSelect = SelectAnwserScore.acountTotalSelect();
  var totalMoreSelete = MoreSelectAnwserScore.acountTotalMoreSelect();
  var totalJudge = JudgeAnwserScore.acountTotalJudge();
  var totalFill = FillAnwserScore.acountTotalFill();
  var totalShort = ShortAnwserScore.acountTotalShort();

  total = totalSelect + totalMoreSelete + totalJudge + totalFill + totalShort;

  document.getElementById("print").innerHTML = total;

  return false;
}

function judgeNull() {
  var personInfos = ["name","id","class"];
  var information = ["姓名","学号","班级"];

  for (var i = 0; i < personInfos.length; i++) {
    var personInfo = document.getElementById(personInfos[i]).value;

    if (personInfo === "") {
      alert("请输入:" + information[i] + "!");
    }
  }
}
