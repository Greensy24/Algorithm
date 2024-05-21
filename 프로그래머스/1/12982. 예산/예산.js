function solution(d, budget) {
    // 부서별 신청 금액을 오름차순으로 정렬합니다.
    d.sort((a, b) => a - b);
    
    // 지원한 부서의 개수를 저장할 변수 answer를 0으로 초기화합니다.
    let answer = 0;
    
    // 각 부서의 신청 금액을 순회하면서 예산 내에서 지원 가능한 부서를 찾습니다.
    for (let i = 0; i < d.length; i++) {
        // 현재 부서의 신청 금액이 남은 예산보다 작거나 같은 경우
        if (budget >= d[i]) {
            // 예산에서 현재 부서의 신청 금액을 차감합니다.
            budget -= d[i];
            // 지원한 부서의 개수를 증가시킵니다.
            answer++;
        } else {
            // 예산이 부족한 경우 더 이상 부서를 지원할 수 없으므로 반복을 종료합니다.
            break;
        }
    }
    return answer;
}