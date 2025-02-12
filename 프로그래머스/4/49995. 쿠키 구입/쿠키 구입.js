function solution(cookie) {
  let maxCookies = 0;
  const n = cookie.length;

  for (let m = 0; m < n - 1; m++) {
    let leftSum = cookie[m];
    let rightSum = cookie[m + 1];
    let left = m;
    let right = m + 1;

    while (left >= 0 && right < n) {
      if (leftSum === rightSum) {
        maxCookies = Math.max(maxCookies, leftSum);
      }
      
      if (leftSum <= rightSum && left > 0) {
        left--;
        leftSum += cookie[left];
      } else if (right < n - 1) {
        right++;
        rightSum += cookie[right];
      } else {
        break;
      }
    }
  }
  
  return maxCookies;
}
