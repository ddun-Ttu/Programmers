const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const str = input[0];
    const rotatedStr = rotateStringClockwise(str);
    console.log(rotatedStr);
});

function rotateStringClockwise(str) {
    const rows = str.split('\n').filter(line => line.trim() !== '');
    const numRows = rows.length;
    const numCols = rows[0].length;

    let rotated = '';
    for (let col = 0; col < numCols; col++) {
        for (let row = numRows - 1; row >= 0; row--) {
            rotated += rows[row][col];
        }
        rotated += '\n';
    }

    return rotated.trim();
}
