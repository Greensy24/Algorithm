function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;

    let cache = [];
    let totalTime = 0;

    for (let city of cities) {
        city = city.toLowerCase();

        if (cache.includes(city)) {
            totalTime += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
        } else {
            totalTime += 5;
            if (cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(city);
        }
    }

    return totalTime;
}