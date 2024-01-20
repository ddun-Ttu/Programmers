def solution(array):
    max_value = array[0]
    max_index = 0

    for i in range(1, len(array)):
        if array[i] > max_value:
            max_value = array[i]
            max_index = i

    return [max_value, max_index]
