function solution(str1, str2) {
    var answer = 0;

    var a = str1.includes(str2)
    
    var string = (a === true ? answer = 1 : answer = 2)
    
    console.log(a)
    return answer;
}