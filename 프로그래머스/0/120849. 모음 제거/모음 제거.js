function solution(my_string) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        if (!vowels.includes(my_string[i])) {
            answer += my_string[i];
        }
    }
    return answer;
}
