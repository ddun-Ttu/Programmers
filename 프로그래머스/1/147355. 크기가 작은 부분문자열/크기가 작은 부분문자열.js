function solution(t, p) {
  var count = 0;
  var pNum = parseInt(p, 10);

  for (let i = 0; i <= t.length - p.length; i++) {
    var substring = t.substring(i, i + p.length);
    var substringNum = parseInt(substring, 10);

    if (substringNum <= pNum) {
      count++;
    }
  }

  return count;
}
