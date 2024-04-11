function solution(numbers) {
    // 0부터 9까지의 숫자를 표시하는 배열 생성
    var digits = Array.from({length: 10}, (_, i) => i);
    // numbers에 있는 숫자들을 digits 배열에서 제거
    numbers.forEach(num => {
        digits[num] = -1;
    });
    // digits 배열에서 남아 있는 숫자들을 모두 더함
    var sum = digits.reduce((acc, cur) => acc + (cur !== -1 ? cur : 0), 0);
    return sum;
}