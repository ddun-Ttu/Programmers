function solution(numbers) {
    var answer = 0;
    var maxNum = numbers.sort((a, b) => b - a);
    
    answer = maxNum[0] * maxNum[1];
    
    
    return answer;
}