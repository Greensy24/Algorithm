function solution(myString) {
    let answer = '';

    // 문자열을 순회하면서 변환 작업 수행
    for (let i = 0; i < myString.length; i++) {
        let char = myString[i];
        if (char === 'a') {
            answer += 'A';
        } else if (char >= 'A' && char <= 'Z' && char !== 'A') {
            answer += char.toLowerCase();
        } else {
            answer += char;
        }
    }

    return answer;
}
