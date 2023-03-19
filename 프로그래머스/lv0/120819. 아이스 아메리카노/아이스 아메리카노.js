function solution(money) {
    var answer = [];
    var americano = 5500;
    var buy = Math.floor(money / americano);
    var chang = money - (americano * buy);
    
    answer[0] = buy;
    answer[1] = chang;
    
    return answer;
}