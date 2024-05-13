function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        // 두 지도의 각 행을 이진수로 변환하여 OR 연산을 수행합니다.
        let row = (arr1[i] | arr2[i]).toString(2);
        // OR 연산 결과의 이진수 길이가 n보다 작을 경우, 앞에 0을 채워줍니다.
        row = row.padStart(n, '0');
        // 변환된 이진수에서 1은 '#'으로, 0은 ' '으로 변환하여 결과 배열에 추가합니다.
        row = row.replace(/1/g, '#').replace(/0/g, ' ');
        answer.push(row);
    }
    return answer;
}