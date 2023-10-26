function solution(arr, flag) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            // flag[i]가 true인 경우, arr[i]를 arr[i] * 2 번 추가
            for (let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            // flag[i]가 false인 경우, answer에서 마지막 arr[i]개의 원소 제거
            answer = answer.slice(0, answer.length - arr[i]);
        }
    }

    return answer;
}