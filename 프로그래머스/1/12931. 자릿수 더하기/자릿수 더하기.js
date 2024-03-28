function solution(n) {
    var answer = 0;
    // 주어진 수를 문자열로 변환하여 각 자릿수를 분리하고 합산합니다.
    var digits = (n + '').split('').map(Number);
    for (var i = 0; i < digits.length; i++) {
        answer += digits[i];
    }
    return answer;
}
