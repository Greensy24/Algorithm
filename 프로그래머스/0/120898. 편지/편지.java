class Solution {
    public int solution(String message) {
        int letterSize = 2; // 각 글자의 크기는 2cm
        int messageLength = message.length();
        int minWidth = letterSize * messageLength;
        return minWidth;
    }
}
