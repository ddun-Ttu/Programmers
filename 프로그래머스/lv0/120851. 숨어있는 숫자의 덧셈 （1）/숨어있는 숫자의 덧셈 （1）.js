function solution(my_string) {
    var answer = 0;
    var x = /[1-9]/g;
    var num = my_string.match(x);
    
    for(var i = 0; i < num.length; i++) {
        answer += Number(num[i])
    }
    
    return answer;
}