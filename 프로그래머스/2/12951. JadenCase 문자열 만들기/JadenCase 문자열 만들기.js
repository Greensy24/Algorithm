function solution(s) {
    return s
        .split(" ")
        .map(word => {
            if (word.length === 0) return "";
            const firstChar = word[0].toUpperCase();
            const rest = word.slice(1).toLowerCase();
            return firstChar + rest;
        })
        .join(" ");
}