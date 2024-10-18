function solution(n) {
    let ternary = n.toString(3);
    
    let reversedTernary = ternary.split('').reverse().join('');
    
    let result = parseInt(reversedTernary, 3);
    
    return result;
}
