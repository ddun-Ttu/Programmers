function solution(box, n) {
    var answer = 0;
    var x = Math.floor(box[0] / n);
    var y = Math.floor(box[1] / n);
    var z = Math.floor(box[2] / n);
    
    answer = x * y * z;
    
    
    return answer;
}