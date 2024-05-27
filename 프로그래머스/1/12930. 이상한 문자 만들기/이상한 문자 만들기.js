function solution(s) {
    // 문자열을 공백 기준으로 분리하여 단어 배열을 생성
    let words = s.split(' ');
    
    // 각 단어에 대해 변환 작업 수행
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let transformedWord = '';
        
        for (let j = 0; j < word.length; j++) {
            // 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환
            if (j % 2 === 0) {
                transformedWord += word[j].toUpperCase();
            } else {
                transformedWord += word[j].toLowerCase();
            }
        }
        
        // 변환된 단어를 원래 위치에 저장
        words[i] = transformedWord;
    }
    
    // 변환된 단어들을 공백으로 합쳐서 최종 문자열 반환
    return words.join(' ');
}
