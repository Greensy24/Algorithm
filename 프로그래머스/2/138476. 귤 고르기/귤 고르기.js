function solution(k, tangerine) {
    const countMap = new Map();
    
    for (const size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    const counts = Array.from(countMap.values()).sort((a, b) => b - a);
    
    let total = 0;
    let kinds = 0;
    
    for (const count of counts) {
        total += count;
        kinds++;
        if (total >= k) break;
    }
    
    return kinds;
}
