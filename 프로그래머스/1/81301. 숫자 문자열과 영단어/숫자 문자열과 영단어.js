function solution(s) {
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numWords.forEach((word, idx) => {
        const regex = new RegExp(word, "g");
        s = s.replace(regex, idx);
    });

    return Number(s);
}
