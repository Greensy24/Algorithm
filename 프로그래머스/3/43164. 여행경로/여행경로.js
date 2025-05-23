function solution(tickets) {
    const graph = new Map();
    
    for (const [from, to] of tickets) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push(to);
    }
    
    for (const destinations of graph.values()) {
        destinations.sort();
    }
    
    const result = [];
    
    function dfs(current) {
        while (graph.has(current) && graph.get(current).length > 0) {
            const next = graph.get(current).shift();
            dfs(next);
        }
        result.push(current);
    }
    
    dfs("ICN");
    
    return result.reverse();
}