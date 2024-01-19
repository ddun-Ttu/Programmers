import math

def solution(hp):
    a = math.floor(hp / 5)
    a1 = hp % 5
    b = math.floor(a1 / 3)
    c = a1 % 3
    
    return a + b + c