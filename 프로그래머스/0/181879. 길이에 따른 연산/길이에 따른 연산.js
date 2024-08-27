function solution(num_list) {
    if (num_list.length >= 11) {
        // 리스트의 길이가 11 이상이면 모든 원소의 합을 반환
        return num_list.reduce((acc, curr) => acc + curr, 0);
    } else {
        // 리스트의 길이가 10 이하이면 모든 원소의 곱을 반환
        return num_list.reduce((acc, curr) => acc * curr, 1);
    }
}
