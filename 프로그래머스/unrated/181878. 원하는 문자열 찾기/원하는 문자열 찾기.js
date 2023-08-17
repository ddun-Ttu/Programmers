function solution(myString, pat) {
    var answer = 0;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
  
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.substring(i, i + pat.length) === pat) {
            answer = 1;
            break;
        }
    }
  
    return answer;
}