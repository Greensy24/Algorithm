function solution(msg) {
    const dictionary = {};
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = i + 1;
    }
    
    let dictSize = 27; 
    let w = ''; 
    const result = []; 

    for (let i = 0; i < msg.length; i++) {
        const c = msg[i];
        const wc = w + c;

     
        if (dictionary[wc]) {
            w = wc;
        } else {
          
            result.push(dictionary[w]);
            dictionary[wc] = dictSize++;
            w = c;
        }
    }

    if (w !== '') {
        result.push(dictionary[w]);
    }

    return result;
}


module.exports = { solution };