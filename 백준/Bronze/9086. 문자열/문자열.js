let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
input.shift();

input.map(x => console.log(x.substring(0, 1) + x.substring(x.length - 1, x.length)));