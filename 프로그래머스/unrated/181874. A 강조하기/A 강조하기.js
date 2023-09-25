function solution(myString) {
    let result = '';

    for (let i = 0; i < myString.length; i++) {
        const char = myString[i];

        if (char === 'a') {
            result += 'A';
        } else if (char >= 'A' && char <= 'Z' && char !== 'A') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }

    return result;
}