function solution(my_string) {
    var answer = 0;
    
    for(var i = 0; i < my_string.length; i++){
        var tmp = 0;
        while(!Number.isNaN(Number(my_string[i]))){
            tmp += my_string[i];
            i++;
        }
        answer += Number(tmp);
    }
    
    return answer;
}