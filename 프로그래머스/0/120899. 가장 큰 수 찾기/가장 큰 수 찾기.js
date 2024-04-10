function solution(array) {
    var maxNumber = Math.max(...array); // 배열에서 가장 큰 수 찾기
    var maxIndex = array.indexOf(maxNumber); // 가장 큰 수의 인덱스 찾기
    
    var answer = [maxNumber, maxIndex]; // 결과 배열 생성
    return answer;
}
