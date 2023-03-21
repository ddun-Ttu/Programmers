function solution(n) {
    var answer = 0;
    var sqrt = Math.sqrt(n);
    
    var a = sqrt % 1 === 0 ? answer = 1 : answer = 2
    
    return answer;
}