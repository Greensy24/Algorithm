function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const kBaseStr = n.toString(k);
    
    const candidates = kBaseStr.split('0');
    
    let primeCount = 0;
    for (let candidate of candidates) {
        if (candidate && isPrime(Number(candidate))) {
            primeCount++;
        }
    }
    
    return primeCount;
}
