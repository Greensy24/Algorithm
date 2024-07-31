function solution(myString, pat) {
    // "A"를 임시 문자 "C"로 바꾸고, "B"를 "A"로 바꾼 다음, "C"를 "B"로 바꿈
    const transformedString = myString.replace(/A/g, 'C').replace(/B/g, 'A').replace(/C/g, 'B');

    // 변환된 문자열에서 pat이 존재하는지 확인
    return transformedString.includes(pat) ? 1 : 0;
}
