function solution(s) {
    // 부호가 있는 경우를 고려하여 숫자 부분을 추출
    const numberPart = s.slice(s[0] === '-' || s[0] === '+' ? 1 : 0);

    // 문자열을 숫자로 변환
    const number = parseInt(numberPart);

    // 부호에 따라 결과 반환
    return s[0] === '-' ? -number : number;
}
