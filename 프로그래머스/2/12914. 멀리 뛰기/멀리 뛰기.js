function solution(n) {
    // 방법의 수를 저장할 배열 생성
    const dp = [0, 1, 2]; // dp[1] = 1칸에 도달하는 방법의 수, dp[2] = 2칸에 도달하는 방법의 수

    // 동적 계획법으로 모든 방법의 수 계산
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }

    // n칸에 도달하는 방법의 수 반환
    return dp[n];
}
