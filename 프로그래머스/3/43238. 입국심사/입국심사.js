function solution(n, times) {
    let minTime = 1;
    let maxTime = Math.max(...times) * n;
    
    let answer = maxTime;
    
    while (minTime <= maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        
        let processedPeople = 0;
        for (const time of times) {
            processedPeople += Math.floor(midTime / time);
            
            if (processedPeople >= n) break;
        }
        
        if (processedPeople >= n) {
            answer = Math.min(answer, midTime);
            maxTime = midTime - 1;
        } else {
            minTime = midTime + 1;
        }
    }
    
    return answer;
}