function solution(number, k) {
    const stack = [];
    let removeCount = k;
    
    for (let i = 0; i < number.length; i++) {
        const currentDigit = number[i];
        
       
        while (stack.length > 0 && removeCount > 0 && stack[stack.length - 1] < currentDigit) {
            stack.pop();
            removeCount--;
        }
        
        stack.push(currentDigit);
    }
    
    while (removeCount > 0) {
        stack.pop();
        removeCount--;
    }
    
    const result = stack.join('');
    return result === '' ? '0' : result;
}