function solution(k, dungeons) {
  let maxDungeons = 0;

  function exploreDungeons(remainingFatigue, visitedCount, visited) {
    maxDungeons = Math.max(maxDungeons, visitedCount);

    for (let i = 0; i < dungeons.length; i++) {
      const [minRequired, fatigueCost] = dungeons[i];

      if (visited[i] || remainingFatigue < minRequired) continue;

      visited[i] = true;
      exploreDungeons(remainingFatigue - fatigueCost, visitedCount + 1, visited);
      visited[i] = false; 
    }
  }

  exploreDungeons(k, 0, Array(dungeons.length).fill(false));
  return maxDungeons;
}