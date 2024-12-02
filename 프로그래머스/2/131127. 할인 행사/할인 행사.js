function solution(want, number, discount) {
    const wantCount = want.reduce((acc, cur, idx) => {
        acc[cur] = number[idx];
        return acc;
    }, {});
    let count = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const discountCount = discount.slice(i, i + 10).reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});
        if (Object.keys(wantCount).every(item => discountCount[item] >= wantCount[item])) {
            count++;
        }
    }
    return count;
}