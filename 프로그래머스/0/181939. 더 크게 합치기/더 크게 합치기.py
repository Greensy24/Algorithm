def solution(a, b):
    # 두 정수를 문자열로 변환하여 붙인 값을 비교
    ab = int(str(a) + str(b))
    ba = int(str(b) + str(a))
    
    # ab와 ba 중 더 큰 값을 반환
    return max(ab, ba)
