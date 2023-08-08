function solution(a, b) {
  var aConcatB = Number(a.toString() + b.toString());
  var twiceProduct = 2 * a * b;

  var answer = Math.max(aConcatB, twiceProduct);

  return answer;
}
