import sys
input = sys.stdin.readline

N = int(input())
min = sorted(list(map(int, input().split())))

answer = []
answer.append(min[0])

for i in range(1, N):
    answer.append(min[i] + answer[i -1])

print(sum(answer))