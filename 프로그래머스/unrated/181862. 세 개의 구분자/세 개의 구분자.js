function solution(myStr) {
  var answer = [];
  var parts = myStr.split(/a|b|c/);

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] !== "") {
      answer.push(parts[i]);
    }
  }

  if (answer.length === 0) {
    answer.push("EMPTY");
  }

  return answer;
}
