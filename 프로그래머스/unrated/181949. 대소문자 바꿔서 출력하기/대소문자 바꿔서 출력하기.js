const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  const str = input[0];
  const convertedStr = convertCase(str);
  console.log(convertedStr);
});

function convertCase(str) {
  let convertedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      convertedStr += char.toLowerCase();
    } else if (char >= 'a' && char <= 'z') {
      convertedStr += char.toUpperCase();
    } else {
      convertedStr += char;
    }
  }

  return convertedStr;
}