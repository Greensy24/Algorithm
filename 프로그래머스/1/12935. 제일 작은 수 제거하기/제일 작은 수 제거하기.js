function solution(arr) {
    // 배열의 길이가 1 이하인 경우, 빈 배열이 아니라면 -1을 리턴
    if (arr.length <= 1) return [-1];
    
    // 배열에서 최솟값을 찾기 위해 spread operator를 사용하여 배열을 복사한 후 정렬
    const sortedArr = [...arr].sort((a, b) => a - b);
    
    // 최솟값을 제외한 배열을 반환
    return arr.filter(num => num !== sortedArr[0]);
}
