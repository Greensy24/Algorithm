function solution(x) {
    // x를 문자열로 변환하여 각 자릿수를 분리
    var digits = x.toString().split('');
    
    // 각 자릿수의 합 계산
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    
    // x가 자릿수의 합으로 나누어 떨어지는지 확인
    if (x % sum === 0) {
        return true; // 하샤드 수인 경우
    } else {
        return false; // 하샤드 수가 아닌 경우
    }
}
