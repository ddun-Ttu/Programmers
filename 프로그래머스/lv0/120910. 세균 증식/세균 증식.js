function solution(n, t) {
  // var answer =  n * Math.pow(2, t);
    
    var answer = n;
    
    for (i = 1; i <= t; i++) {
        answer *= 2;
    }
    
    

  return answer;
}