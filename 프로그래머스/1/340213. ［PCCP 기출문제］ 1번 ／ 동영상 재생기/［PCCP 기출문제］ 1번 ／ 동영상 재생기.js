function timeToSeconds(timeStr) {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
}

function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let videoLenSec = timeToSeconds(video_len);
    let currentPos = timeToSeconds(pos);
    const opStartSec = timeToSeconds(op_start);
    const opEndSec = timeToSeconds(op_end);

    if (opStartSec <= currentPos && currentPos <= opEndSec) {
        currentPos = opEndSec;
    }

    for (const command of commands) {
        if (command === "prev") {
            currentPos = Math.max(0, currentPos - 10);
        } else if (command === "next") {
            currentPos = Math.min(videoLenSec, currentPos + 10);
        }

        if (opStartSec <= currentPos && currentPos <= opEndSec) {
            currentPos = opEndSec;
        }
    }

    return secondsToTime(currentPos);
}