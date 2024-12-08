function solution(routes) {
    // 차량 경로를 끝나는 지점 기준으로 정렬
    routes.sort((a, b) => a[1] - b[1]);
    
    let cameras = 0; // 설치된 카메라 수
    let lastCamera = -30001; // 마지막으로 설치한 카메라 위치 (최소값보다 작게 초기화)

    for (const route of routes) {
        const [start, end] = route;

        if (lastCamera < start) {
            cameras++;
            lastCamera = end;
        }
    }
    
    return cameras;
}
