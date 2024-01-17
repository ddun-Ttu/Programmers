import sys
input=sys.stdin.readline

N = int(input())

number = []

for _ in range(N) :
    number.append(int(input()))

sorted_numbers = sorted(number)

for num in sorted_numbers :
    print(num)
