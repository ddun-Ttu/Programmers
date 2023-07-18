function solution(my_string, n) {
  var answer = '';

  if (n >= my_string.length) {
    answer = my_string;
  } else {
    answer = my_string.slice(-n);
  }

  return answer;
}