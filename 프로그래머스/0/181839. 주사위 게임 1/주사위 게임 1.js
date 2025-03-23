function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) {
        return a * a + b * b;
    }
    
    if ((a % 2 === 1 && b % 2 === 0) || (a % 2 === 0 && b % 2 === 1)) {
        return 2 * (a + b);
    }
    
    return Math.abs(a - b);
}