function solution(s) {
    var numbersRegex = /^[0-9]+$/;
    
    if ((s.length === 4 || s.length === 6) && numbersRegex.test(s)) {
        return true;
    } else {
        return false;
    }
}
