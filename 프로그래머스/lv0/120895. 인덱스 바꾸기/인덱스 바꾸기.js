function solution(my_string, num1, num2) {
    var chars = my_string.split('');
    
    chars[num1] = "$";
    chars[num2] = "&";
    
    var new_string = chars.join("");
    
    new_string = new_string.replace("$", my_string[num2]);
    new_string = new_string.replace("&", my_string[num1]);

    
    return new_string;
}