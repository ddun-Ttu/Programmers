function solution(s) {
  var answer = '';
  var charCount = {};

  // 문자열을 순회하며 문자의 등장 횟수를 기록
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 등장 횟수가 1인 문자들을 찾아서 사전 순으로 정렬
  var uniqueChars = Object.keys(charCount).filter(char => charCount[char] === 1);
  uniqueChars.sort();

  // 정렬된 문자 배열을 문자열로 합치기
  answer = uniqueChars.join('');

  return answer;
}