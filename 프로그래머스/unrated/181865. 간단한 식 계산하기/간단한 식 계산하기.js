function solution(binomial) {
    // 빈칸을 기준으로 문자열을 분할
    const parts = binomial.split(' ');

    // 분할된 문자열 요소를 추출
    const a = parseInt(parts[0]);
    const op = parts[1];
    const b = parseInt(parts[2]);

    // 연산 수행
    var answer = 0;
    if (op === '+') {
        answer = a + b;
    } else if (op === '-') {
        answer = a - b;
    } else if (op === '*') {
        answer = a * b;
    }

    return answer;
}