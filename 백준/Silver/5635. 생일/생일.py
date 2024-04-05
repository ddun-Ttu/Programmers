S = int(input())
list = []

for i in range(S):
  name,day,month,year = input().split()
  day,month,year = map(int,(day,month,year))

  list.append((year,month,day,name))

list.sort()

print(list[-1][3])
print(list[0][3])