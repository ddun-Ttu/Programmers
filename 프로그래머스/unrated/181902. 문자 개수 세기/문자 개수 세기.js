function solution(my_string) {
    const counts = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string.charAt(i);
        const position = char.charCodeAt(0);

        if (char >= 'A' && char <= 'Z') {
            counts[position - 'A'.charCodeAt(0)]++;
        }
        else if (char >= 'a' && char <= 'z') {
            counts[position - 'a'.charCodeAt(0) + 26]++;
        }
    }

    return counts;
}