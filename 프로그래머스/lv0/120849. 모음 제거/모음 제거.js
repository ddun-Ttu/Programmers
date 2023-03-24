function solution(my_string) {
    var answer = '';
    var rel = /[a,e,i,o,u]/gi;
    
    answer = my_string.replace(rel,"");
    
    return answer;
}