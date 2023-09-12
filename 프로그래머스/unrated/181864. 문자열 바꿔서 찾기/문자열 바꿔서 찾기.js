function solution(myString, pat) {
    var answer = 0;
    
    function swapAB(str) {
        var swapped = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] === 'A') {
                swapped += 'B';
            } else if (str[i] === 'B') {
                swapped += 'A';
            }
        }
        return swapped;
    }
    
    for (var i = 0; i <= myString.length - pat.length; i++) {
        var substringToCheck = myString.slice(i, i + pat.length);
        var swappedSubstring = swapAB(substringToCheck);
        
        if (swappedSubstring === pat) {
            answer = 1;
            break;
        }
    }
    
    return answer;
}
