function solution(n, t, m, p) {
    let answer = '';
    let number = 0;
    let sequence = '';

    while (sequence.length < t * m) {
        sequence += number.toString(n).toUpperCase();
        number++;
    }

    for (let i = 0; i < t; i++) {
        answer += sequence[i * m + (p - 1)];
    }

    return answer;
}