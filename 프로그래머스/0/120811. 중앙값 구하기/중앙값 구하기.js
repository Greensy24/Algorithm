function solution(array) {
    // 주어진 배열을 정렬
    array.sort((a, b) => a - b);
    
    var answer = 0;
    var length = array.length;

    // 배열의 길이가 홀수인 경우
    if (length % 2 !== 0) {
        answer = array[Math.floor(length / 2)]; // 중앙값
    } else { // 배열의 길이가 짝수인 경우
        var midIndex = length / 2;
        answer = (array[midIndex - 1] + array[midIndex]) / 2; // 중앙에 위치한 두 값의 평균
    }

    return answer;
}