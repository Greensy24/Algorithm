function solution(strArr) {
    var answer = [];
    
    for (var i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            // 짝수번째 인덱스: 소문자로 변환
            answer.push(strArr[i].toLowerCase());
        } else {
            // 홀수번째 인덱스: 대문자로 변환
            answer.push(strArr[i].toUpperCase());
        }
    }
    
    return answer;
}
