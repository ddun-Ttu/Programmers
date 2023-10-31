function solution(emergency) {
    const sortedEmergency = [...emergency];
    sortedEmergency.sort((a, b) => b - a); // 응급도의 크기 역순으로 정렬

    const order = {};
    for (let i = 0; i < sortedEmergency.length; i++) {
        order[sortedEmergency[i]] = i + 1; // 응급도와 인덱스를 매칭
    }

    const result = emergency.map((priority) => order[priority]);
    return result;
}