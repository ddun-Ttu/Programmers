function solution(n) {
    var answer = 0;
    if ( n <= 7 ) {
        answer = 1;
    } 
    if ( n >= 8) {
        answer = Math.ceil(n / 7);
    }
    return answer;
}