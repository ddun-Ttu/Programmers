import sys
input=sys.stdin.readline

N = int(input())
answer = []

for i in range(N):
    age, name = map(str, input().split())
    age = int(age)
    answer.append((age, name))
    
answer.sort(key = lambda x : x[0])

for j in answer :
    print(j[0], j[1])