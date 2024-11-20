function solution(n, words) {
    let usedWords = new Set();  
    let prevWord = words[0];
    
    usedWords.add(prevWord);
    
    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        
        if (currentWord.length < 2) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        if (usedWords.has(currentWord)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        if (prevWord[prevWord.length - 1] !== currentWord[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        usedWords.add(currentWord); 
        prevWord = currentWord;
    }
    
    return [0, 0]; 
}
