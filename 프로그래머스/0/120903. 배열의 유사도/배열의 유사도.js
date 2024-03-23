function solution(s1, s2) {
    var answer = 0;
    // s1 배열의 각 원소를 반복하면서
    for (var i = 0; i < s1.length; i++) {
        // s2 배열에 해당 원소가 존재하는지 확인하고 있다면 answer를 증가시킴
        if (s2.includes(s1[i])) {
            answer++;
        }
    }
    return answer;
}