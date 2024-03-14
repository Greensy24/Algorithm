class Solution {
    public int solution(int n, int k) {
        int yakitoriPricePerPortion = 12000; // 양꼬치 1인분의 가격
        int drinkPrice = 2000; // 음료수 1개의 가격
        int serviceDrinkPerYakitori = 1; // 10인분 양꼬치당 주는 음료수의 개수

        // 양꼬치의 총 가격 계산
        int totalYakitoriPrice = n * yakitoriPricePerPortion;
        
        // 서비스로 주는 음료수 개수 계산
        int freeDrinks = n / 10 * serviceDrinkPerYakitori;
        
        // 음료수의 총 가격 계산
        int totalDrinkPrice = (k - freeDrinks) * drinkPrice;
        
        // 총 지불해야 하는 금액 계산
        int totalPayment = totalYakitoriPrice + totalDrinkPrice;
        
        return totalPayment;
    }
}
