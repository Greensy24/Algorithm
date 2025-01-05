function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let score = 0;
    let j = 0;

    for (let i = 0; i < B.length; i++) {
        if (B[i] > A[j]) {
            score++;
            j++;
        }
    }

    return score;
}