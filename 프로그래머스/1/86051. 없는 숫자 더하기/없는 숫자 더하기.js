function solution(numbers) {
    var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var missingNumbers = allNumbers.filter(num => !numbers.includes(num));
    var sum = missingNumbers.reduce((acc, num) => acc + num, 0);

    return sum;
}