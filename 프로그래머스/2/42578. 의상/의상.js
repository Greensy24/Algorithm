function solution(clothes) {
    const clothingCount = {};

    clothes.forEach(([_, category]) => {
        if (clothingCount[category]) {
            clothingCount[category]++;
        } else {
            clothingCount[category] = 1;
        }
    });

    let combinations = 1;
    for (let count of Object.values(clothingCount)) {
        combinations *= (count + 1);
    }

    return combinations - 1;
}
