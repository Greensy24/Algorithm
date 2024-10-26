function solution(food) {
    let leftSide = '';

    for (let i = 1; i < food.length; i++) {
        const portion = Math.floor(food[i] / 2);
        leftSide += i.toString().repeat(portion);
    }

    const rightSide = leftSide.split('').reverse().join('');
    return leftSide + '0' + rightSide;
}
