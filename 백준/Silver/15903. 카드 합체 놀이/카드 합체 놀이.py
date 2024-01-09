import sys

input = sys.stdin.readline

n, m = map(int, input().split())
card = list(map(int, input().split()))

for i in range(m):
    card = sorted(card)
    a = card[0] + card[1]
    
    card[0] = a
    card[1] = a

print(sum(card))
