function solution(players, callings) {
    // 선수들의 현재 순서를 추적할 맵을 만듭니다.
    let playerIndex = new Map();
    for (let i = 0; i < players.length; i++) {
        playerIndex.set(players[i], i);
    }

    // 각 호출을 처리합니다.
    for (let calling of callings) {
        let currentIndex = playerIndex.get(calling);

        // 선수의 현재 인덱스가 0보다 크다면 앞선 선수와 자리를 바꿉니다.
        if (currentIndex > 0) {
            let previousIndex = currentIndex - 1;
            let previousPlayer = players[previousIndex];

            // 두 선수의 위치를 바꿉니다.
            players[previousIndex] = calling;
            players[currentIndex] = previousPlayer;

            // 맵에서 두 선수의 인덱스를 업데이트합니다.
            playerIndex.set(calling, previousIndex);
            playerIndex.set(previousPlayer, currentIndex);
        }
    }

    return players;
}
