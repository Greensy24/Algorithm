function solution(N) {
    let batteryUsage = 0;

    while (N > 0) {
        if (N % 2 === 0) {
            N /= 2; 
        } else {
            N -= 1; 
            batteryUsage++;
        }
    }
    
    return batteryUsage;
}
