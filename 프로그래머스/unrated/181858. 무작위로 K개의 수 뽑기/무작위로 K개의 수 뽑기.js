function solution(arr, k) {
    const uniqueNumbers = new Set();
    const result = [];

    for (const num of arr) {
        if (uniqueNumbers.has(num)) {
            continue;
        }

        uniqueNumbers.add(num);
        result.push(num);

        if (result.length === k) {
            break;
        }
    }

    while (result.length < k) {
        result.push(-1);
    }

    return result;
}
