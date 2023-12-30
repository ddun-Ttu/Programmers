let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);
let number = input[1].split('').map(x => Number(x));
let sum = 0;

for(let i=0; i<T; i++) {
   sum += number[i];
}

console.log(sum);