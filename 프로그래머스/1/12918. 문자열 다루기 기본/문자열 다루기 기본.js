function solution(s) {
    // 문자열 길이가 4 또는 6이 아니면 false 반환
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 숫자로만 구성되어 있는지 확인
    for (var i = 0; i < s.length; i++) {
        if (isNaN(s[i])) { // 숫자가 아닌 문자가 있는 경우
            return false;
        }
    }
    
    // 모든 조건을 만족하면 true 반환
    return true;
}