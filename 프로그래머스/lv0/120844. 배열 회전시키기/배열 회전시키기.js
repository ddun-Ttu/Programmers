function solution(numbers, direction) {
    var answer = [];
    if (direction === "left") {
    let first = numbers.shift();
        numbers.push(first);
    } else if (direction === "right") {
    let last = numbers.pop();
        numbers.unshift(last);
    }
      answer = numbers.slice();
    
      return answer;
}