const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = Number(input[0]);

function solution(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

solution(n);
