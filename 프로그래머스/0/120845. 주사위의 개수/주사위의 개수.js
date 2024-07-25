function solution(box, n) {
    // 각 차원에서 주사위가 들어갈 수 있는 최대 개수를 구합니다.
    var countX = Math.floor(box[0] / n);
    var countY = Math.floor(box[1] / n);
    var countZ = Math.floor(box[2] / n);

    // 각 차원의 개수를 곱하여 최대 개수를 구합니다.
    var answer = countX * countY * countZ;

    return answer;
}
