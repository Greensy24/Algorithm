function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  const result = [];
  let maxDay = days[0];
  let count = 0;

  days.forEach(day => {
    if (day <= maxDay) {
      count += 1;
    } else {
      result.push(count);
      count = 1;
      maxDay = day;
    }
  });

  result.push(count);
  return result;
}
