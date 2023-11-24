function solution(my_string, queries) {
    for (const query of queries) {
        const [start, end] = query;
        const reversedSubstring = my_string.substring(start, end + 1).split('').reverse().join('');
        my_string = my_string.substring(0, start) + reversedSubstring + my_string.substring(end + 1);
    }
    return my_string;
}