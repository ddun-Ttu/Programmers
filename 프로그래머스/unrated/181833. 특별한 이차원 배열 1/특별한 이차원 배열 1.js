function solution(n) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        const row = Array(n).fill(0);
        row[i] = 1;
        answer.push(row);
    }
    
    return answer;
}