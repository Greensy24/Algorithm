function solution(topping) {
    const leftSet = new Set();
    const rightSet = new Set(topping);
    const rightCount = new Map();

    for (let t of topping) {
        rightCount.set(t, (rightCount.get(t) || 0) + 1);
    }

    let fairCuts = 0;

    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        leftSet.add(t);

        rightCount.set(t, rightCount.get(t) - 1);
        if (rightCount.get(t) === 0) {
            rightSet.delete(t);
        }

        if (leftSet.size === rightSet.size) {
            fairCuts++;
        }
    }

    return fairCuts;
}