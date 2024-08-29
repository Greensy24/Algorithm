function solution(my_string, index_list) {
    // index_list의 각 원소에 해당하는 my_string의 문자들을 추출하여 새로운 문자열 생성
    let result = '';
    for (let i = 0; i < index_list.length; i++) {
        result += my_string[index_list[i]];
    }
    return result;
}
