class Solution {
    public String solution(String my_string, String letter) {
        // 주어진 문자열에서 letter를 제거
        String answer = my_string.replaceAll(letter, "");
        return answer;
    }
}
