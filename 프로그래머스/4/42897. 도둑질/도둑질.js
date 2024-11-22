function solution(money) {
    const n = money.length;

    if (n === 3) {
        return Math.max(money[0], money[1], money[2]);
    }

    function getMaxMoney(start, end) {
        const dp = Array(end - start + 1).fill(0);
        dp[0] = money[start];
        dp[1] = Math.max(money[start], money[start + 1]);

        for (let i = 2; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[start + i]);
        }

        return dp[dp.length - 1];
    }

    const case1 = getMaxMoney(0, n - 2);
    const case2 = getMaxMoney(1, n - 1);

    return Math.max(case1, case2);
}
