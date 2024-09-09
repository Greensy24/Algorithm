function solution(a, b) {
    
    const concatValue = Number(`${a}${b}`);
    

    const productValue = 2 * a * b;
    
 
    return Math.max(concatValue, productValue);
}
