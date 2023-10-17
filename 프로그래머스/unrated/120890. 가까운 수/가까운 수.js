function solution(array, n) {
  var answer = array[0];
  var minDifference = Math.abs(n - array[0]);

  for (var i = 1; i < array.length; i++) {
    var difference = Math.abs(n - array[i]);
    if (difference < minDifference || (difference === minDifference && array[i] < answer)) {

      minDifference = difference;
      answer = array[i];
    }
  }

  return answer;
}