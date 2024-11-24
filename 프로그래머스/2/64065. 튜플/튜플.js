function solution(s) {
    const sets = s
        .slice(2, -2)
        .split('},{') 
        .map(set => set.split(',').map(Number));
    sets.sort((a, b) => a.length - b.length);

    const result = [];

    sets.forEach(set => {
        set.forEach(num => {
            if (!result.includes(num)) {
                result.push(num);
            }
        });
    });

    return result;
}