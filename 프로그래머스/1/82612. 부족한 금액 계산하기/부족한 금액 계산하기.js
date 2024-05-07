function solution(price, money, count) {
    // 놀이기구를 count번 탔을 때 필요한 총 금액 계산
    let totalCost = price * (count * (count + 1)) / 2;
    
    // 현재 가지고 있는 돈에서 필요한 총 금액을 뺀 값 계산
    let shortage = totalCost - money;
    
    // 만약 부족하지 않으면 0을 반환, 부족하면 부족한 금액을 반환
    return shortage > 0 ? shortage : 0;
}