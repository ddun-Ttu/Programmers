function solution(numLog) {
  var answer = '';
  var currentNumber = numLog[0];

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];

    if (diff === 1) {
      answer += 'w';
      currentNumber += 1;
    } else if (diff === -1) {
      answer += 's';
      currentNumber -= 1;
    } else if (diff === 10) {
      answer += 'd';
      currentNumber += 10;
    } else if (diff === -10) {
      answer += 'a';
      currentNumber -= 10;
    }
  }
    return answer;
}