function solution(my_string) {
    var answer = "";
    var total = [];

    for ( var i = 0; i < my_string.length; i++){
        total.unshift(my_string[i])
    } 

    answer = total.join("");

    return answer;
}
