function solution(my_string, letter) {
    var answer = '';
    
    
    for (let i = 0; i < my_string.length; i++) {
        var erase = my_string[i].includes(letter);
        
        if( erase !== true ) {
            answer += my_string[i]
        }
    }
    
    return answer;
}
