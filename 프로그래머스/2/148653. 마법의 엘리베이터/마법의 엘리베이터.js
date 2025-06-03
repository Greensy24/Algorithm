function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        // 현재 1의 자리 숫자
        const digit = storey % 10;
        
        if (digit < 5) {
            // 4 이하면 직접 빼는 것이 효율적
            answer += digit;
            storey = Math.floor(storey / 10);
        } else if (digit > 5) {
            // 6 이상이면 올림이 효율적
            answer += (10 - digit);
            storey = Math.floor(storey / 10) + 1;
        } else {
            // digit == 5인 경우, 다음 자릿수를 확인
            const nextDigit = Math.floor(storey / 10) % 10;
            
            if (nextDigit >= 5) {
                // 다음 자릿수가 5 이상이면 올림이 효율적
                answer += (10 - digit);
                storey = Math.floor(storey / 10) + 1;
            } else {
                // 다음 자릿수가 4 이하면 내림이 효율적
                answer += digit;
                storey = Math.floor(storey / 10);
            }
        }
    }
    
    return answer;
}
