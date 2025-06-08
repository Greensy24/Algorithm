function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    let start = null, lever = null, exit = null;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            else if (maps[i][j] === 'L') lever = [i, j];
            else if (maps[i][j] === 'E') exit = [i, j];
        }
    }
    
    function bfs(startPos, targetPos) {
        const queue = [[startPos[0], startPos[1], 0]]; 
        const visited = Array(rows).fill().map(() => Array(cols).fill(false));
        visited[startPos[0]][startPos[1]] = true;
        
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        while (queue.length > 0) {
            const [row, col, dist] = queue.shift();
            
            if (row === targetPos[0] && col === targetPos[1]) {
                return dist;
            }
            
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (newRow >= 0 && newRow < rows && 
                    newCol >= 0 && newCol < cols && 
                    !visited[newRow][newCol] && 
                    maps[newRow][newCol] !== 'X') {
                    
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol, dist + 1]);
                }
            }
        }
        
        return -1;
    }
    
    const distToLever = bfs(start, lever);
    if (distToLever === -1) return -1;
    
    const distToExit = bfs(lever, exit);
    if (distToExit === -1) return -1;
    
    return distToLever + distToExit;
}
