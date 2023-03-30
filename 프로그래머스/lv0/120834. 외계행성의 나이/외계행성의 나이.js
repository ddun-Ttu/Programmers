function solution(age) {
  let ageStr = age.toString();
  let answer = '';
  for (let i = 0; i < ageStr.length; i++) {
    let letter = String.fromCharCode('a'.charCodeAt(0) + parseInt(ageStr[i]));
    answer += letter;
  }
  return answer;
}