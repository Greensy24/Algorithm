function solution(land) {
    const n = land.length;

    let dp = [...land[0]];
    
    for (let i = 1; i < n; i++) {
        const prevDp = [...dp];
        
        for (let j = 0; j < 4; j++) {
            let maxPrev = 0;
            for (let k = 0; k < 4; k++) {
                if (j !== k && prevDp[k] > maxPrev) {
                    maxPrev = prevDp[k];
                }
            }
            
            dp[j] = land[i][j] + maxPrev;
        }
    }
    
    return Math.max(...dp);
}