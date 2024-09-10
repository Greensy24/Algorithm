function solution(s) {
    s = s.toLowerCase();

    const countP = (s.match(/p/g) || []).length;
    const countY = (s.match(/y/g) || []).length;
    
    return countP === countY;
}