import math

def solution(n):
    answer = 0
    sqrtNum = math.sqrt(n)
    
    if float(int(sqrtNum)) == math.sqrt(n):
        answer = 1
    else : 
        answer = 2
    
    
    return answer