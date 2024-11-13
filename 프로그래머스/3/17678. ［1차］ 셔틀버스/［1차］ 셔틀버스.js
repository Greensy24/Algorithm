function convertToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function convertToHHMM(minutes) {
    const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hours}:${mins}`;
}

function solution(n, t, m, timetable) {
    const crewTimes = timetable.map(convertToMinutes).sort((a, b) => a - b);
    let shuttleTime = convertToMinutes("09:00");

    let crewIndex = 0;
    for (let i = 0; i < n; i++) {
        let passengers = [];
        for (let j = 0; j < m; j++) {
            if (crewIndex < crewTimes.length && crewTimes[crewIndex] <= shuttleTime) {
                passengers.push(crewTimes[crewIndex]);
                crewIndex++;
            }
        }

        if (i === n - 1) {
            if (passengers.length < m) {
                return convertToHHMM(shuttleTime);
            } else {
                return convertToHHMM(passengers[passengers.length - 1] - 1); 
            }
        }

        shuttleTime += t;
    }
}

module.exports = { solution };