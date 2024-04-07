K, N, M = map(int, input().split())

if (K * N > M):
    result = K * N - M
else:
    result = 0

print(result)