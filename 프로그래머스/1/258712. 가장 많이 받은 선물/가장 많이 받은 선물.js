function solution(friends, gifts) {
    // 각 친구의 선물 기록 초기화
    let giftRecord = {};
    friends.forEach(friend => {
        giftRecord[friend] = { given: 0, received: 0, nextMonthReceive: 0 };
    });

    gifts.forEach(gift => {
        let [giver, receiver] = gift.split(" ");
        giftRecord[giver].given += 1;
        giftRecord[receiver].received += 1;
    });

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            let friendA = friends[i];
            let friendB = friends[j];

            let givenAtoB = gifts.filter(gift => gift === `${friendA} ${friendB}`).length;
            let givenBtoA = gifts.filter(gift => gift === `${friendB} ${friendA}`).length;

            if (givenAtoB > givenBtoA) {
                giftRecord[friendA].nextMonthReceive += 1;
            } else if (givenBtoA > givenAtoB) {
                giftRecord[friendB].nextMonthReceive += 1;
            } else {
                let giftIndexA = giftRecord[friendA].given - giftRecord[friendA].received;
                let giftIndexB = giftRecord[friendB].given - giftRecord[friendB].received;

                if (giftIndexA > giftIndexB) {
                    giftRecord[friendA].nextMonthReceive += 1;
                } else if (giftIndexB > giftIndexA) {
                    giftRecord[friendB].nextMonthReceive += 1;
                }
            }
        }
    }

    let maxGifts = 0;
    for (let friend in giftRecord) {
        maxGifts = Math.max(maxGifts, giftRecord[friend].nextMonthReceive);
    }

    return maxGifts;
}
