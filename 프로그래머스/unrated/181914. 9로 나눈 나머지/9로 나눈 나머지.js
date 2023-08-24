function solution(number) {
    let sumOfDigits = 0;
    
    for (let i = 0; i < number.length; i++) {
        sumOfDigits += parseInt(number[i]);
    }
    
    return sumOfDigits % 9;
}