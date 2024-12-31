function solution(skill, skill_trees) {
    let validCount = 0;

    for (let skillTree of skill_trees) {
        let skillIndex = 0;
        let isValid = true;

        for (let s of skillTree) {
            if (skill.includes(s)) {
                if (s === skill[skillIndex]) {
                    skillIndex++;
                } else {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            validCount++;
        }
    }

    return validCount;
}