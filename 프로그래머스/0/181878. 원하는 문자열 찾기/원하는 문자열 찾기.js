function solution(myString, pat) {
  const lowerMyString = myString.toLowerCase();
  const lowerPat = pat.toLowerCase();

  return lowerMyString.includes(lowerPat) ? 1 : 0;
}
