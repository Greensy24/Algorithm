function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (stack.length > 0 && stack[stack.length - 1] === currentChar) {
            stack.pop();
        } else {
            stack.push(currentChar); 
        }
    }

    return stack.length === 0 ? 1 : 0;
}