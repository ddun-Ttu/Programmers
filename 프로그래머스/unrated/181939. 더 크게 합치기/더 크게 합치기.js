function solution(a, b) {
  var aConcatB = Number(a.toString() + b.toString());
  var bConcatA = Number(b.toString() + a.toString());

  var answer = Math.max(aConcatB, bConcatA);

  return answer;
}
