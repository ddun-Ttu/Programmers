import math

def solution(balls, share):
    a = math.factorial(balls)
    b = math.factorial(balls - share) * math.factorial(share)
    answer = a / b
    
    return answer