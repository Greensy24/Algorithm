function solution(my_string, alp) {
    // 입력된 문자열 my_string에서 alp에 해당하는 모든 글자를 대문자로 변환
    var answer = my_string.split('').map(char => {
        // 현재 문자가 alp와 같다면 대문자로 변환, 아니면 그대로 유지
        return char === alp ? char.toUpperCase() : char;
    }).join(''); // 다시 문자열로 합침
    return answer;
}
