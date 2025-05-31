function solution(order) {
    const n = order.length;
    let mainBelt = 1;
    let subBelt = [];
    let loaded = 0;
    
    for (let i = 0; i < n; i++) {
        const targetBox = order[i];
        
        if (subBelt.length > 0 && subBelt[subBelt.length - 1] === targetBox) {
            subBelt.pop();
            loaded++;
        }
        else if (mainBelt <= targetBox) {
            while (mainBelt < targetBox) {
                subBelt.push(mainBelt);
                mainBelt++;
            }
            mainBelt++;
            loaded++;
        }
        else {
            break;
        }
    }
    
    return loaded;
}