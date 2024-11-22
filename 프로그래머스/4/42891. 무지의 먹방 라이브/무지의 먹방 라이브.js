function solution(food_times, k) {
    if (food_times.reduce((sum, time) => sum + time, 0) <= k) return -1;

    let foodHeap = food_times.map((time, index) => [time, index + 1]);
    
    foodHeap.sort((a, b) => a[0] - b[0]);

    let totalTime = 0;
    let previousTime = 0;
    let n = food_times.length;

    for (let i = 0; i < foodHeap.length; i++) {
        const [currentFoodTime] = foodHeap[i];
        const timeDifference = currentFoodTime - previousTime;

        if (timeDifference !== 0) {
            const spendTime = timeDifference * n;

            if (totalTime + spendTime > k) {
                const remainingFoods = foodHeap.slice(i).sort((a, b) => a[1] - b[1]);
                return remainingFoods[(k - totalTime) % n][1];
            }

            totalTime += spendTime;
            previousTime = currentFoodTime;
        }
        n -= 1;
    }

    return -1;
}