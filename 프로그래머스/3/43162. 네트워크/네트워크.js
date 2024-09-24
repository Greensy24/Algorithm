function solution(n, computers) {
    let visited = Array(n).fill(false); 
    let networkCount = 0; 

    function dfs(i) {
        visited[i] = true;
        for (let j = 0; j < n; j++) {
           
            if (computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { 
            networkCount++; 
            dfs(i); 
        }
    }

    return networkCount; 
}
