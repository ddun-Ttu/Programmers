function solution(str_list, ex) {
  let answer = '';
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i].indexOf(ex) === -1) {
      answer += str_list[i];
    }
  }
  return answer;
}