function solution(intStrs, k, s, l) {
   var answer = [];

  for (let i = 0; i < intStrs.length; i++) {
    const str = intStrs[i].substring(s, s + l); // 문자열을 자름
    const num = parseInt(str, 10); // 문자열을 정수로 변환

    if (num > k) {
      answer.push(num);
    }
  }

  return answer;
}