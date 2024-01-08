def solution(my_string):
    answer = ''
    
    list_str = list(my_string)
    list_str.reverse()
    answer = ''.join(list_str)
    
    return answer