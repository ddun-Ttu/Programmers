function solution(my_string, s, e) {
  const prefix = my_string.substring(0, s);
  const reversedSubstring = my_string.substring(s, e + 1).split('').reverse().join('');
  const suffix = my_string.substring(e + 1);

  var answer = prefix + reversedSubstring + suffix;
  return answer;
}
