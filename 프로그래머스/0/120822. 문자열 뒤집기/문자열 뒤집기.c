#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

char* solution(const char* my_string) {
    // 주어진 문자열의 길이를 구합니다.
    int length = strlen(my_string);
    
    // 결과를 저장할 새로운 문자열을 동적으로 할당합니다.
    char* answer = (char*)malloc(length + 1); // '\0'을 저장하기 위해 길이 + 1만큼 할당합니다.
    
    // 뒤집은 문자열을 answer에 저장합니다.
    for (int i = 0; i < length; i++) {
        answer[i] = my_string[length - i - 1];
    }
    
    // 문자열의 끝에 널 문자('\0')를 추가합니다.
    answer[length] = '\0';
    
    return answer;
}

int main() {
    const char* original = "Hello, world!";
    char* reversed = solution(original);
    printf("Reversed string: %s\n", reversed);
    free(reversed); // 메모리 누수를 방지하기 위해 동적으로 할당된 메모리를 해제합니다.
    return 0;
}
