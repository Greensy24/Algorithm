function solution(sequence) {
    const n = sequence.length;
    if (n === 0) return 0;
    
    const pulse1 = new Array(n);
    const pulse2 = new Array(n);
    
    for (let i = 0; i < n; i++) {
        pulse1[i] = sequence[i] * (i % 2 === 0 ? 1 : -1);
        pulse2[i] = sequence[i] * (i % 2 === 0 ? -1 : 1);
    }
    
    function maxSubArray(arr) {
        let maxSum = arr[0];
        let currentSum = arr[0];
        
        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    return Math.max(maxSubArray(pulse1), maxSubArray(pulse2));
}