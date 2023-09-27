function solution(arr, delete_list) {
  var answer = [];

  const deleteSet = new Set(delete_list);

  for (const element of arr) {
    if (!deleteSet.has(element)) {
      answer.push(element);
    }
  }

  return answer;
}
