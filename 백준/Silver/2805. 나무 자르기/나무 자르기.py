import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))
tree = list(map(int, input().split()))

최소 = 0
최대 = max(tree)

while 최소 <= 최대 :
    중간 = (최소 + 최대 ) //2

    answer = 0
    for i in tree :
        if i > 중간 :
            answer += i - 중간
    if answer >= M:
        total = 중간
        최소 = 중간 + 1

    else :
        최대 = 중간 - 1

print(total)
        