function solution(strs, t) {
    const n = t.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (const s of strs) {
            const len = s.length;
            if (i >= len && t.slice(i - len, i) === s) {
                dp[i] = Math.min(dp[i], dp[i - len] + 1);
            }
        }
    }

    return dp[n] === Infinity ? -1 : dp[n];
}