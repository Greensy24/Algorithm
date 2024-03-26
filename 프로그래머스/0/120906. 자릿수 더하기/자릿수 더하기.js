function solution(n) {
    var answer = 0;
    // 정수를 문자열로 변환하여 각 자리 숫자를 분리하고 합산합니다.
    var digits = n.toString().split('');
    for (var i = 0; i < digits.length; i++) {
        answer += parseInt(digits[i]);
    }
    return answer;
}
