function solution(str_list) {
    const leftIndex = str_list.indexOf('l');
    const rightIndex = str_list.indexOf('r');

    if (leftIndex !== -1 && (rightIndex === -1 || leftIndex < rightIndex)) {
        return str_list.slice(0, leftIndex);
    } else if (rightIndex !== -1) {
        return str_list.slice(rightIndex + 1);
    } else {
        return [];
    }
}