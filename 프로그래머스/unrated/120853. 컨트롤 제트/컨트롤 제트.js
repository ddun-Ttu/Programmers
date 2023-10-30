function solution(s) {
    const tokens = s.split(' ');
    let stack = [];
    
    for (const token of tokens) {
        if (token === "Z") {
            stack.pop();
        } else {
            const number = parseInt(token, 10);
            stack.push(number);
        }
    }
    
    let sum = 0;
    for (const number of stack) {
        sum += number;
    }
    
    return sum;
}