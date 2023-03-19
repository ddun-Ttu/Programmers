function solution(array) {
    var answer = 0;
    
    var arr = array.sort((a, b) => a - b);
    var i = (Math.ceil(arr.length / 2)) -1;
    answer = arr[i];
    
    
    
    return answer;
}