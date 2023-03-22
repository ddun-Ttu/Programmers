function solution(n) {
    var answer = 0;
    var sqrtNum = Math.sqrt(n)
    
    if (sqrtNum % Math.floor(sqrtNum) === 0) {
        answer = 1;
    } else
        answer = 2;
   
    return answer;
}