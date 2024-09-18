function solution(s) {
    let count = 0;   // 변환 횟수를 저장할 변수
    let removedZeros = 0;   // 제거된 0의 개수를 저장할 변수

    while (s !== "1") {
        let zeros = s.split("0").length - 1;
        removedZeros += zeros;
        
        // 0을 제거한 후 남은 문자열의 길이를 이진법으로 변환
        s = s.replace(/0/g, ""); 
        let len = s.length;
        s = len.toString(2);  // 이진법으로 변환

        // 변환 횟수 증가
        count++;
    }

    return [count, removedZeros];
}
