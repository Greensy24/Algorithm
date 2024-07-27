function solution(arr1, arr2) {
    // 배열의 길이를 먼저 비교합니다.
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    } else {
        // 배열의 길이가 같을 경우, 배열 원소의 합을 계산합니다.
        const sum1 = arr1.reduce((acc, val) => acc + val, 0);
        const sum2 = arr2.reduce((acc, val) => acc + val, 0);
        
        // 배열 원소의 합을 비교합니다.
        if (sum1 > sum2) {
            return 1;
        } else if (sum1 < sum2) {
            return -1;
        } else {
            return 0;
        }
    }
}
