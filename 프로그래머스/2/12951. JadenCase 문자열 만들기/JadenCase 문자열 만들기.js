function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word.length === 0) return '';
      const firstChar = word[0];
      const restChars = word.slice(1);
      return firstChar.toUpperCase() + restChars.toLowerCase();
    })
    .join(' ');
}
