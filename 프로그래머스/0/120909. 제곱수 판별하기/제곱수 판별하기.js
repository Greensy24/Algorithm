function solution(n) {
    // 주어진 수 n이 제곱수인지 확인하기 위해 Math.sqrt 함수를 사용하여 제곱근을 구합니다.
    // 만약 제곱근이 정수라면 n은 제곱수입니다.
    if (Number.isInteger(Math.sqrt(n))) {
        return 1; // 제곱수일 경우 1 반환
    } else {
        return 2; // 제곱수가 아닐 경우 2 반환
    }
}
