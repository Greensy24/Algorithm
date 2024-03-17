import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int evenCount = 0;
        int oddCount = 0;
        
        // 짝수와 홀수 개수 카운트
        for (int num : num_list) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        
        // 결과 배열 생성 후 반환
        int[] answer = {evenCount, oddCount};
        return answer;
    }
}
