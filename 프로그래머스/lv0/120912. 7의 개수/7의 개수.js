function solution(array) {
    var answer = 0;

    for (var i = 0; i < array.length; i++) {
        var numStr = array[i].toString();
        
        for (var j = 0; j < numStr.length; j++) {
            if (numStr[j] === '7') {
                answer++;
            }
        }
    }
    
    return answer;
}