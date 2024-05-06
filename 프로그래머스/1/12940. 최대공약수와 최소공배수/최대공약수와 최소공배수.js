function solution(n, m) {
    // 최대공약수를 구하는 함수
    function gcd(a, b) {
        while (b !== 0) {
            var temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }
    
    // 최소공배수를 구하는 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var gcdResult = gcd(n, m); // 최대공약수 계산
    var lcmResult = lcm(n, m); // 최소공배수 계산

    return [gcdResult, lcmResult]; // 결과 반환
}