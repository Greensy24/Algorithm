function solution(numbers) {
    var resultSet = new Set();
    
    // 모든 가능한 두 수의 조합에 대해 합을 구하여 Set에 추가
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            resultSet.add(numbers[i] + numbers[j]);
        }
    }
    
    // Set을 배열로 변환하고 오름차순으로 정렬
    var answer = Array.from(resultSet).sort((a, b) => a - b);
    
    return answer;
}
