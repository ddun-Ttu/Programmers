function solution(arr, queries) {
    var answer = [];
    
     for (const query of queries) {
    const [s, e, k] = query;
    let minGreaterThanK = Infinity;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minGreaterThanK) {
        minGreaterThanK = arr[i];
      }
    }

    answer.push(minGreaterThanK === Infinity ? -1 : minGreaterThanK);
  }

    return answer;
}