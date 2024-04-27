function solution(n) {
    // 숫자를 문자열로 변환하여 각 자릿수를 배열로 만듭니다.
    var digits = String(n).split('');
    
    // 각 자릿수를 숫자로 변환하고 내림차순으로 정렬합니다.
    var sortedDigits = digits.map(Number).sort((a, b) => b - a);
    
    // 정렬된 숫자들을 다시 문자열로 합칩니다.
    var sortedNumber = sortedDigits.join('');
    
    // 문자열을 정수로 변환하여 리턴합니다.
    return parseInt(sortedNumber);
}