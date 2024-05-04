function solution(absolutes, signs) {
    var sum = 0;
    for (var i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum += absolutes[i]; // 양수인 경우 더합니다.
        } else {
            sum -= absolutes[i]; // 음수인 경우 빼줍니다.
        }
    }
    return sum;
}
