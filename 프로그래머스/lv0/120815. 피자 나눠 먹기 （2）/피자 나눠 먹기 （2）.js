function solution(n) {
    var answer = 0;
  	// 한 판에 여섯 조각
    let pizza = 6;
    // 같은 수로 나눠질 때까지 +6
    while(pizza % n !== 0) {
        pizza += 6;
    } 
  	// 박스 수 반환
    answer = pizza / 6;
    
    return answer;
}