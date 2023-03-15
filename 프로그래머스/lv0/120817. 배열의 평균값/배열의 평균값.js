function solution(numbers) {
    var answer = 0;
    let sum = 0
    const leng = numbers.length;
    
    for ( let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
        
        answer = sum / leng;
    }
    return answer ;
}
