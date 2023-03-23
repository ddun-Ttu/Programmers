function solution(str1, str2) {
    var answer = 0;
    var str = str1.includes(str2);
    
        if ( str === true) {
            answer = 1;
        } else {
            answer = 2;
        }
    
    return answer;
}