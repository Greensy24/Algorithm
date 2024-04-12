function solution(n) {
    var answer = [];
    // 숫자를 문자열로 변환하여 각 자리 숫자를 배열에 추가
    var digits = n.toString().split('');
    // 배열을 뒤집어서 원하는 순서로 만듦
    for (var i = digits.length - 1; i >= 0; i--) {
        answer.push(parseInt(digits[i]));
    }
    return answer;
}