function solution(user_id, banned_id) {
  const resultSet = new Set();

  const isMatch = (user, banned) => {
    if (user.length !== banned.length) return false;
    for (let i = 0; i < user.length; i++) {
      if (banned[i] !== '*' && user[i] !== banned[i]) {
        return false;
      }
    }
    return true;
  };

  const findMatches = (index, currentSet) => {
    if (index === banned_id.length) {
      const sortedSet = [...currentSet].sort().join(',');
      resultSet.add(sortedSet);
      return;
    }

    for (let user of user_id) {
      if (!currentSet.has(user) && isMatch(user, banned_id[index])) {
        currentSet.add(user);
        findMatches(index + 1, currentSet);
        currentSet.delete(user);
      }
    }
  };

  findMatches(0, new Set());
  return resultSet.size;
}