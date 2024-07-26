function solution(num_list) {
    // num_list를 오름차순으로 정렬합니다.
    num_list.sort(function(a, b) {
        return a - b;
    });
    
    // 가장 작은 5개의 수를 추출하여 answer에 저장합니다.
    var answer = num_list.slice(0, 5);
    
    return answer;
}
