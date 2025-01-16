function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ index, priority }));
  let executionOrder = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (queue.some(process => process.priority > current.priority)) {
      queue.push(current);
    } else {
      executionOrder++;
      if (current.index === location) {
        return executionOrder;
      }
    }
  }
}