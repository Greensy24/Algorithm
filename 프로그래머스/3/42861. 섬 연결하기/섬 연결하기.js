function solution(n, costs) {
  const findParent = (parent, x) => {
    if (parent[x] === x) return x;
    return parent[x] = findParent(parent, parent[x]);
  };

  const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
  };

  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

  let totalCost = 0;
  for (const [a, b, cost] of costs) {
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      totalCost += cost;
    }
  }

  return totalCost;
}