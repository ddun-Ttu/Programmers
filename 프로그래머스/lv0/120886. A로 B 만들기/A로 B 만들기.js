function solution(before, after) {
    const beforeChars = new Map();
    const afterChars = new Map();

    for (const char of before) {
        beforeChars.set(char, (beforeChars.get(char) || 0) + 1);
    }

    for (const char of after) {
        afterChars.set(char, (afterChars.get(char) || 0) + 1);
    }

    for (const [char, count] of afterChars.entries()) {
        if (!beforeChars.has(char) || beforeChars.get(char) < count) {
            return 0;
        }
    }

    return 1;
}




