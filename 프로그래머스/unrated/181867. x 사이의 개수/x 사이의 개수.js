function solution(myString) {
    var answer = [];

    var dividedStrings = myString.split("x");
    for (var i = 0; i < dividedStrings.length; i++) {
        answer.push(dividedStrings[i].length);
     }

    return answer;
}