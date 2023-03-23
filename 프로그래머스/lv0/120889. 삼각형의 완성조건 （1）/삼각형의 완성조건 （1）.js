function solution(sides) {
    var answer = 0;
    var x = sides.sort((a, b) => a - b);

    if ((x[0] + x[1]) > x[2]) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}