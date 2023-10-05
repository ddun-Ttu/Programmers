function solution(n) {
  var answer = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      // n이 짝수인 경우
      n = n / 2;
    } else {
      // n이 홀수인 경우
      n = 3 * n + 1;
    }
    answer.push(n);
  }
    return answer;
}