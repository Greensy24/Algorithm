function solution(n, vertex) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distances = Array(n + 1).fill(Infinity);
  const queue = [];

  vertex.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  distances[1] = 0;
  queue.push(1);

  while (queue.length > 0) {
    const current = queue.shift();

    graph[current].forEach(next => {
      if (distances[next] === Infinity) {
        distances[next] = distances[current] + 1;
        queue.push(next);
      }
    });
  }

  const maxDistance = Math.max(...distances.slice(1));
  return distances.filter(distance => distance === maxDistance).length;
}