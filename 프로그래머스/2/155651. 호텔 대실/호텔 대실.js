function solution(book_time) {
    function timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    }
    
    const events = [];
    
    for (const [start, end] of book_time) {
        const startTime = timeToMinutes(start);
        const endTime = timeToMinutes(end) + 10;
        
        events.push([startTime, 1]);
        events.push([endTime, -1]);
    }
    
    events.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let currentRooms = 0;
    let maxRooms = 0;
    
    for (const [time, type] of events) {
        currentRooms += type;
        maxRooms = Math.max(maxRooms, currentRooms);
    }
    
    return maxRooms;
}