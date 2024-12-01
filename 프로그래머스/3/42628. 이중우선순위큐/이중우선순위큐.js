function solution(operations) {
    let minHeap = [];
    let maxHeap = [];
    
    operations.forEach(operation => {
        const [command, value] = operation.split(' ');
        const number = parseInt(value);

        if (command === 'I') {
            minHeap.push(number);
            maxHeap.push(number);
            minHeap.sort((a, b) => a - b);
            maxHeap.sort((a, b) => b - a);
        } else if (command === 'D') {
            if (number === 1) {
                if (maxHeap.length > 0) {
                    const maxValue = maxHeap.shift();
                    const index = minHeap.indexOf(maxValue);
                    if (index > -1) {
                        minHeap.splice(index, 1);
                    }
                }
            } else if (number === -1) {
                if (minHeap.length > 0) {
                    const minValue = minHeap.shift();
                    const index = maxHeap.indexOf(minValue);
                    if (index > -1) {
                        maxHeap.splice(index, 1);
                    }
                }
            }
        }
    });

    if (minHeap.length === 0) {
        return [0, 0];
    } else {
        return [maxHeap[0], minHeap[0]];
    }
}