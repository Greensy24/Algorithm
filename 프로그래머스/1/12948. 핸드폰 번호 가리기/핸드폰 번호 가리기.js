function solution(phone_number) {

    let hiddenPart = phone_number.slice(0, -4).replace(/./g, '*');
    let visiblePart = phone_number.slice(-4);
    return hiddenPart + visiblePart;
}
