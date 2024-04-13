function solution(a, b) {
    // a와 b가 같은 경우는 아무 수나 리턴
    if (a === b) return a;

    var start = Math.min(a, b); // a와 b 중 작은 값
    var end = Math.max(a, b);   // a와 b 중 큰 값
    var sum = 0;

    // start부터 end까지의 모든 정수를 더함
    for (var i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}