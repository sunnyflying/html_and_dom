function ShortAnwserScore() {
  this.anwser = anwser;
  this.score = score;
}

ShortAnwserScore.prototype.acountShortScore = function(inputShort) {
  var total = 0;
  if (inputShort === this.anwser) {
    total = score;
  }
  return total;
};
