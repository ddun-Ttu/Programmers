import sys
from collections import deque

def bfs(color, visited, x, y):
    queue = deque()
    queue.append((x, y))
    visited[x][y] = True

    while queue:
        x, y = queue.popleft()

        for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and color[nx][ny] == color[x][y]:
                visited[nx][ny] = True
                queue.append((nx, ny))

N = int(sys.stdin.readline())
color = [list(sys.stdin.readline().strip()) for _ in range(N)]
visited = [[False] * N for _ in range(N)]

cnt = 0
for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs(color, visited, i, j)
            cnt += 1


color_rg = [row[:] for row in color]

for i in range(N):
    for j in range(N):
        if color_rg[i][j] == 'R':
            color_rg[i][j] = 'G'

visited = [[False] * N for _ in range(N)]

cnt_rg = 0
for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs(color_rg, visited, i, j)
            cnt_rg += 1

print(cnt, cnt_rg)