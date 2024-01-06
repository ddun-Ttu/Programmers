import math

def solution(n, k):
    service = math.floor(n / 10)
    food = n * 12000
    drink = (k - service) * 2000
    
    answer = food + drink
        
    return answer