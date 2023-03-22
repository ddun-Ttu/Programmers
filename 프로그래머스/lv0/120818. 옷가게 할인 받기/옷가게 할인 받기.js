function solution(price) {
    var answer = 0;
    var a = 0;
    
    if (price >= 100000 && price < 300000) {
        a = price* 0.95;
    } else if ( price >= 300000 && price < 500000) {
        a = price * 0.9; 
    } else if ( price >= 500000){
        a = price * 0.8;
    } else {
        a = price;
    }
    
    answer = Math.floor(a);
    
    return answer;
}