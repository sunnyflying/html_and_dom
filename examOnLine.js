function getGrade() {
  var total = 0;
  var corret = ["封装性","继承性","多态性"];
  judgeNull();

  var totalSelete = getSelete("selete1", "b") + getSelete("selete2", "c");

  var totalDuoSelete = getDuoSelete("duoselete1", "a,b,d") + getDuoSelete("duoselete2", "a,b,c");

  var totalInput = getInput1("UML", "统一建模语言") +
                   getInput2("object1", corret) +
                   getInput2("object2", corret) +
                   getInput2("object3", corret);

  var totalText = getText();

  var totalJudge = getJudge("judge1", "false") + getJudge("judge2", "true");

  total = totalSelete + totalDuoSelete + totalInput + totalText + totalJudge;
  document.getElementById("print").innerHTML=total;
}

function judgeNull() {
  var personName = document.getElementById("name").value;
  var personId = document.getElementById("id").value;
  var personClass = document.getElementById("class").value;

  if (personName === "" || personId === "" || personClass ==="") {
    alert("请输入完整信息！");
  }
}

function getJudge(judge, anwser) {
  var total = 0;
  var judgeAnwser = document.getElementsByName(judge);

  for (var i = 0; i < judgeAnwser.length; i++) {
    if (judgeAnwser[i].checked === true && judgeAnwser[i].value === anwser) {
      total = 10;
    }
  }
  return total;
}

function getSelete(selete, anwser) {
  var total = 0;
  var radio = document.getElementsByName(selete);

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked === true && radio[i].value === anwser) {
      total = 5;
    }
  }
  return total;
}

function getDuoSelete(duoSelete, anwser) {
  var array = [];
  var total = 0;
  var duoSeleteAnwser = document.getElementsByName(duoSelete);

  for (var i = 0; i < duoSeleteAnwser.length; i++) {
    if (duoSeleteAnwser[i].checked === true) {
      array.push(duoSeleteAnwser[i].value);
    }
  }

  if (array.toString() === anwser) {
    total = 10;
  }

  return total;
}

function getInput1(input, anwser) {
  var total = 0;
  var inputAnwser = document.getElementById(input).value;

  if (inputAnwser === anwser) {
      total = 15;
  }

  return total;
}

function getInput2(input, corret) {
  var total = 0;
  var inputAnwser = document.getElementById(input).value;

  for (var i = 0; i < corret.length; i++) {
    if (inputAnwser === corret[i]) {
      total += 5;
    }
  }
  return total;
}

function getText() {
  var total = 0;
  var input = document.getElementById("ask").value;

  if (input === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
    total = 20;
  }
  return total;
}
