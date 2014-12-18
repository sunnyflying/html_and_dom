function getAcount() {
  var scorce = 0;
  var questions = Question.all();

  if (hasEmptyRequiredInput()) {
    return false;
  }

  _.forEach(questions, function(question){
    var inputAnwser = document.getElementsByName(question.name);
    scorce += question.calculate(inputAnwser);
  });

  document.getElementById('acount').value = scorce;

  return false;
}

function hasEmptyRequiredInput() {
  var personInfos = ["class","id","name"];
  var information = ["班级","学号","姓名"];

  for (var i = 0; i < personInfos.length; i++) {
    var personInfo = document.getElementById(personInfos[i]).value;

    if (personInfo === "") {
      alert("请输入:" + information[i] + "!");
    }
  }
}
