function solution(hp) {
    var answer = 0;
    
    var a = Math.floor(hp / 5); // 몫 ( 장군개미 몇 마리를 썼는지)
    var a1 = hp % 5; // 나머지 (사냥감의 남은 체력)
    var b = Math.floor( a1 / 3 ); // 나머지에 병정개미 몇마리 썼는지
    var c = a1 % 3; // 나머지 남은 체력들
    
    answer = a + b + c ;
    
    
    return answer;
}