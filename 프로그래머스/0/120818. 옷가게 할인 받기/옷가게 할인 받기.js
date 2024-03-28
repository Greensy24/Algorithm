function solution(price) {
    var discount = 0;
    
    if (price >= 500000) {
        discount = 0.2;
    } else if (price >= 300000) {
        discount = 0.1;
    } else if (price >= 100000) {
        discount = 0.05; 
    }
    
    var finalPrice = Math.floor(price - (price * discount)); // 가격은 10원 단위로 반올림
    return finalPrice;
}
