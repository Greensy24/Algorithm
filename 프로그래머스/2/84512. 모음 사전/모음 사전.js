function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let position = 0;
  let multiplier = 1;

  for (let i = 0; i < 5; i++) {
    multiplier = multiplier * 5 + 1;
  }

  for (let i = 0; i < word.length; i++) {
    multiplier = (multiplier - 1) / 5;
    position += vowels.indexOf(word[i]) * multiplier + 1;
  }

  return position;
}
