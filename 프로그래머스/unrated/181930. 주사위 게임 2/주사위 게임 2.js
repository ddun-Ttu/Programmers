function solution(a, b, c) {
  var answer = 0;

  if (a === b && b === c) {
    // 세 숫자가 모두 같을 때
    answer = (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
  } else if (a === b || b === c || a === c) {
    // 두 숫자가 같을 때
    answer = (a + b + c) * (a * a + b * b + c * c);
  } else {
    // 모든 숫자가 다를 때
    answer = a + b + c;
  }

  return answer;
}