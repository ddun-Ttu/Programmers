function solution(numbers) {
    var answer = 0;
    var numArr = numbers.sort((a, b) => b - a);
    
    var a = numArr[0] * numArr[1];
    var b = numArr[numArr.length -1] * numArr[numArr.length -2]
    
    if( a > b ) {
        answer = a;
    } else {
        answer = b;
    }
    
    return answer;
}