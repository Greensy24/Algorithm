function solution(arr) {
    // 결과를 저장할 빈 배열 X를 초기화합니다.
    let X = [];
    
    // 배열 arr의 각 원소에 대해 작업을 수행합니다.
    arr.forEach(a => {
        // 원소 a를 a번 X에 추가합니다.
        for (let i = 0; i < a; i++) {
            X.push(a);
        }
    });
    
    // 작업이 완료된 배열 X를 반환합니다.
    return X;
}
