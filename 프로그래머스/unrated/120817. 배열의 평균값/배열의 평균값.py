def solution(numbers):
    answer = 0
    num = 0
    
    for i in numbers :
        num += i
    answer = num / len(numbers)
    
    return answer