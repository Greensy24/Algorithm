function solution(n) {
  const MOD = 1234567;

  let a = 0; 
  let b = 1; 

  if (n === 0) return a;
  if (n === 1) return b;

  for (let i = 2; i <= n; i++) {
    let next = (a + b) % MOD; 
    a = b;
    b = next; 
  }

  return b; 
}
