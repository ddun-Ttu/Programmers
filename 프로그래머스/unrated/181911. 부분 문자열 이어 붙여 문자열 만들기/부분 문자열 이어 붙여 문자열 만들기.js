function solution(my_strings, parts) {
  var answer = [];

  for (let i = 0; i < my_strings.length; i++) {
    const [s, e] = parts[i];
    const substring = my_strings[i].substring(s, e + 1);
    answer.push(substring);
  }

  return answer.join('');
}
