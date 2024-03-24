function solution(n) {
    var answer = 0;

    // i를 1부터 n까지 증가시키면서 순서쌍을 찾음
    for (var i = 1; i <= n; i++) {
        // n을 i로 나눴을 때 나머지가 0이면 i는 n의 약수이므로 (i, n/i)가 순서쌍에 포함됨
        if (n % i === 0) {
            // 두 숫자의 곱이 n이 되는 순서쌍의 개수 증가
            answer++;
        }
    }

    return answer;
}