class Solution {
    public int[] solution(int money) {
        int pricePerAmericano = 5500;
        int maxAmericanoCount = money / pricePerAmericano;
        int remainingMoney = money % pricePerAmericano;
        
        int[] answer = {maxAmericanoCount, remainingMoney};
        return answer;
    }
}
