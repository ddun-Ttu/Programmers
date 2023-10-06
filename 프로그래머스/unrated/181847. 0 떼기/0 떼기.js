function solution(n_str) {
   var answer = n_str;
  
  while (answer.charAt(0) === '0') {
    answer = answer.substring(1); // 문자열의 첫 번째 문자(0)을 제거
  }

  return answer;
}