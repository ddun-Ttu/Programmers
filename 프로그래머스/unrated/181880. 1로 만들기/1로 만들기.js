function solution(num_list) {
    var totalOperations = 0;

    for (var i = 0; i < num_list.length; i++) {
        var num = num_list[i];
        while (num > 1) {
            if (num % 2 === 0) {
                // 짝수일 경우 나누기 2
                num /= 2;
            } else {
                // 홀수일 경우 1 빼고 나누기 2
                num = (num - 1) / 2;
            }
            totalOperations++;
        }
    }

    return totalOperations;
}
