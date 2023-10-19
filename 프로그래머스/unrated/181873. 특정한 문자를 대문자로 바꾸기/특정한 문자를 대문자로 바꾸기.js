function solution(my_string, alp) {
    var result = '';
    for (var i = 0; i < my_string.length; i++) {
        if (my_string[i] === alp) {
            // 문자가 alp와 같다면 대문자로 변경 후 result에 추가
            result += my_string[i].toUpperCase();
        } else {
            // 그 외의 문자는 그대로 result에 추가
            result += my_string[i];
        }
    }
    return result;
}
