function solution(arr, k) {
    // k가 홀수인지 확인
    if (k % 2 === 1) {
        // 홀수일 경우: 모든 원소에 k를 곱함
        return arr.map(element => element * k);
    } else {
        // 짝수일 경우: 모든 원소에 k를 더함
        return arr.map(element => element + k);
    }
}
