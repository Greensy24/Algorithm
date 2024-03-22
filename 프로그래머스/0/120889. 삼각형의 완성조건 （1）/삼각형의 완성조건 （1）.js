function solution(sides) {
    // 배열을 오름차순으로 정렬
    sides.sort((a, b) => a - b);

    // 가장 긴 변의 길이
    const longestSide = sides[2];
    // 나머지 두 변의 길이의 합
    const sumOfOtherSides = sides[0] + sides[1];

    // 삼각형 조건을 만족하는지 확인
    if (longestSide < sumOfOtherSides) {
        return 1; // 삼각형을 만들 수 있음
    } else {
        return 2; // 삼각형을 만들 수 없음
    }
}
