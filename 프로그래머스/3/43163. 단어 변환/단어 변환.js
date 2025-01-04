function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const isConvertible = (word1, word2) => {
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
            if (diff > 1) return false;
        }
        return diff === 1;
    };

    const queue = [[begin, 0]];
    const visited = new Set();

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        if (currentWord === target) return steps;

        for (const word of words) {
            if (!visited.has(word) && isConvertible(currentWord, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        }
    }

    return 0;
}
