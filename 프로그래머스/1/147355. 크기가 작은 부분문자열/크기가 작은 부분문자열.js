function solution(t, p) {
    var answer = 0;
    
    // 문자열 t에서 가능한 부분 문자열을 모두 추출하여 검사
    for (var i = 0; i <= t.length - p.length; i++) {
        var substring = t.substr(i, p.length); // t에서 p와 같은 길이의 부분 문자열 추출
        var substringNum = parseInt(substring); // 부분 문자열을 숫자로 변환
        
        // 부분 문자열이 p보다 작거나 같은지 확인
        if (substringNum <= parseInt(p)) {
            answer++;
        }
    }
    
    return answer;
}