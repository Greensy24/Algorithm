function solution(arrayA, arrayB) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    function getGcdOfArray(arr) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = gcd(result, arr[i]);
        }
        return result;
    }
    
    function canDivideAll(divisor, arr) {
        return arr.every(num => num % divisor === 0);
    }
    
    function cannotDivideAny(divisor, arr) {
        return arr.every(num => num % divisor !== 0);
    }
    
    let gcdA = getGcdOfArray(arrayA);
    let maxA = 0;
    
    for (let i = gcdA; i >= 1; i--) {
        if (gcdA % i === 0) {
            if (canDivideAll(i, arrayA) && cannotDivideAny(i, arrayB)) {
                maxA = i;
                break;
            }
        }
    }
    
    let gcdB = getGcdOfArray(arrayB);
    let maxB = 0;
    
    for (let i = gcdB; i >= 1; i--) {
        if (gcdB % i === 0) {
            if (canDivideAll(i, arrayB) && cannotDivideAny(i, arrayA)) {
                maxB = i;
                break;
            }
        }
    }
    
    return Math.max(maxA, maxB);
}