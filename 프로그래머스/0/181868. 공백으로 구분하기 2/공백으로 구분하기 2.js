function solution(my_string) {
    // 문자열을 공백을 기준으로 나누어 배열로 반환
    var answer = my_string.split(' ');
    // 공백만 포함된 항목은 제거
    answer = answer.filter(word => word !== '');
    return answer;
}
