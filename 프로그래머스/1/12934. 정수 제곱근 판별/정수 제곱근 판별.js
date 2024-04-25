function solution(n) {
    // 주어진 수 n이 1보다 작으면 예외 처리
    if (n <= 0) return -1;

    // 주어진 수의 제곱근을 구함
    var sqrt = Math.sqrt(n);

    // 제곱근이 정수일 경우, 주어진 수는 양의 정수의 제곱이므로 (sqrt + 1)의 제곱 반환
    if (Number.isInteger(sqrt)) {
        return Math.pow(sqrt + 1, 2);
    } else {
        // 제곱근이 정수가 아닐 경우, 주어진 수는 양의 정수의 제곱이 아님
        return -1;
    }
}
