function solution(my_string) {
    const numbers = [];
    
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(parseInt(my_string[i]))) {
            numbers.push(parseInt(my_string[i]));
        }
    }
    
    return numbers.sort((a, b) => a - b);
}