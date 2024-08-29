function solution(num_list) {
    // 모든 원소들의 곱 구하기
    let product = num_list.reduce((acc, num) => acc * num, 1);

    // 모든 원소들의 합 구하기
    let sum = num_list.reduce((acc, num) => acc + num, 0);

    // 합의 제곱 구하기
    let sumSquared = sum * sum;

    // 곱이 합의 제곱보다 작으면 1, 크거나 같으면 0 리턴
    return product < sumSquared ? 1 : 0;
}