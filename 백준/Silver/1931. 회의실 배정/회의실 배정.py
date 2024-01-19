import sys
input = sys.stdin.readline

N = int(input())
meeting = [tuple(map(int, input().split()))for _ in range(N)]

meeting.sort(key=lambda x : (x[1], x[0]))
answer = 0
now = 0

for start, end in meeting :
    if now <= start :
        now = end
        answer += 1
 
print(answer)