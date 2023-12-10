function solution(numbers) {
    const n = numbers.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 0) {
                    count++;
                }
            }
        }
    }

    return count;
}