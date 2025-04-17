function solution(files) {
    const parsedFiles = files.map((file, index) => {

        const match = file.match(/^([^0-9]*)([0-9]{1,5})(.*)$/);
        
        return {
            original: file,  
            head: match[1].toLowerCase(), 
            number: parseInt(match[2], 10), 
            tail: match[3],   
            index: index 
        };
    });
    parsedFiles.sort((a, b) => {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        }
            if (a.number !== b.number) {
            return a.number - b.number;
        } 
        return a.index - b.index;
    });
    return parsedFiles.map(file => file.original);
}