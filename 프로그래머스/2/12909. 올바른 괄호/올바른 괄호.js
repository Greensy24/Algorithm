function solution(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    
    // 스택이 비어있어야만 올바른 괄호 문자열이다.
    return stack.length === 0;
}
