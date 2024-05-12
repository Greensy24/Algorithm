function solution(left, right) {
    var answer = 0;
    for (var i = left; i <= right; i++) {
        // 해당 수의 제곱근을 구합니다.
        var sqrt = Math.sqrt(i);
        // 제곱근이 정수일 경우 (즉, 제곱수일 경우) 약수의 개수가 홀수이므로 뺄셈을 합니다.
        if (Number.isInteger(sqrt)) {
            answer -= i;
        } else {
            // 제곱근이 정수가 아닐 경우 (즉, 제곱수가 아닐 경우) 약수의 개수가 짝수이므로 덧셈을 합니다.
            answer += i;
        }
    }
    return answer;
}