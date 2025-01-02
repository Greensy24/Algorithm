function solution(scoville, K) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        insert(value) {
            this.heap.push(value);
            this.bubbleUp();
        }

        bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let element = this.heap[index];
                let parentIndex = Math.floor((index - 1) / 2);
                let parent = this.heap[parentIndex];

                if (parent <= element) break;
                this.heap[index] = parent;
                this.heap[parentIndex] = element;
                index = parentIndex;
            }
        }

        extractMin() {
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
            }
            return min;
        }

        sinkDown() {
            let index = 0;
            const length = this.heap.length;
            const element = this.heap[0];

            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild;
                let swap = null;

                if (leftChildIndex < length) {
                    leftChild = this.heap[leftChildIndex];
                    if (leftChild < element) {
                        swap = leftChildIndex;
                    }
                }

                if (rightChildIndex < length) {
                    rightChild = this.heap[rightChildIndex];
                    if (
                        (swap === null && rightChild < element) ||
                        (swap !== null && rightChild < leftChild)
                    ) {
                        swap = rightChildIndex;
                    }
                }

                if (swap === null) break;
                this.heap[index] = this.heap[swap];
                this.heap[swap] = element;
                index = swap;
            }
        }
    }

    const minHeap = new MinHeap();
    scoville.forEach(s => minHeap.insert(s));

    let count = 0;
    while (minHeap.heap.length > 1 && minHeap.heap[0] < K) {
        const leastSpicy = minHeap.extractMin();
        const secondLeastSpicy = minHeap.extractMin();
        const newScoville = leastSpicy + (secondLeastSpicy * 2);
        minHeap.insert(newScoville);
        count++;
    }

    return minHeap.heap[0] >= K ? count : -1;
}