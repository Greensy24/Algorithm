function solution(s) {
    // 문자열을 배열로 변환하여 각 문자의 유니코드 값을 기준으로 정렬
    var sortedChars = s.split('').sort(function(a, b) {
        return b.charCodeAt(0) - a.charCodeAt(0);
    });
    // 정렬된 문자 배열을 다시 문자열로 합치기
    var answer = sortedChars.join('');
    return answer;
}
