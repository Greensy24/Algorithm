class Solution {
    public int solution(int n, int t) {
        // 세균의 수를 나타내는 변수
        int bacteriaCount = n;
        
        // t시간 동안 세균의 증식 계산
        for (int i = 0; i < t; i++) {
            bacteriaCount *= 2; // 세균이 1시간에 두 배만큼 증식
        }
        
        // 최종 세균의 수 반환
        return bacteriaCount;
    }
}
