function solution(num, k) {
    var answer = 0;
    var numstr = num.toString();
    
   if(numstr.indexOf(k) >= 0) {
        answer = numstr.indexOf(k) + 1;
    } else {
        answer = -1;
    }
    
    return answer;
}