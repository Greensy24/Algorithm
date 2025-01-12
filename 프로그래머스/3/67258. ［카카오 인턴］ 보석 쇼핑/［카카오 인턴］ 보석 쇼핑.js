function solution(gems) {
    const gemTypes = new Set(gems).size;
    const gemCount = {};
    let left = 0;
    let minLength = Infinity;
    let answer = [];
    let uniqueCount = 0;

    for (let right = 0; right < gems.length; right++) {
        const rightGem = gems[right];
        gemCount[rightGem] = (gemCount[rightGem] || 0) + 1;

        if (gemCount[rightGem] === 1) {
            uniqueCount++;
        }

        while (uniqueCount === gemTypes) {
            const length = right - left + 1;

            if (length < minLength) {
                minLength = length;
                answer = [left + 1, right + 1];
            }

            const leftGem = gems[left];
            gemCount[leftGem]--;
            if (gemCount[leftGem] === 0) {
                uniqueCount--;
                delete gemCount[leftGem];
            }
            left++;
        }
    }

    return answer;
}
