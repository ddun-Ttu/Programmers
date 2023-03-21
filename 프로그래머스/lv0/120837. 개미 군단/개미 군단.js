function solution(hp) {
    var answer = 0;
    
    var a = parseInt(hp / 5);
    var a1 = hp % 5;
    var b = parseInt(a1 / 3 );
    var c = a1 % 3;
    answer = a + b + c ;
    

    return answer;
}