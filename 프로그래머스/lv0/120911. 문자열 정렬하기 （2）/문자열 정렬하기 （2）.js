function solution(my_string) {
    var answer = '';
    var change = my_string.replace(/[A-Z]/g, (match) => {
        return match.toLowerCase();
    });
    var arr = change.split('');
    
    answer = arr.sort();
    
    return answer.join('');
}