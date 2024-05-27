function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        // 각 명함을 가로와 세로 중 큰 값을 가로로, 작은 값을 세로로 놓기
        const [w, h] = sizes[i];
        const longer = Math.max(w, h);
        const shorter = Math.min(w, h);
        
        // 최대 가로 길이와 최대 세로 길이 갱신
        if (longer > maxWidth) maxWidth = longer;
        if (shorter > maxHeight) maxHeight = shorter;
    }
    
    // 지갑의 크기 계산
    return maxWidth * maxHeight;
}
