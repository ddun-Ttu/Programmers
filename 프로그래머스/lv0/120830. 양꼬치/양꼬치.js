function solution(n, k) {
    var answer = 0;
    var nMoney = 12000;
    var kMoney = 2000;
    var service = Math.floor(n / 10);
    
    answer = ( n * nMoney) + ((k - service)* kMoney) ;
    
    return Math.floor(answer);
}