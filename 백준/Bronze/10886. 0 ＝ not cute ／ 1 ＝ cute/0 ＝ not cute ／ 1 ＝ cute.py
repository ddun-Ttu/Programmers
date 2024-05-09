n = int(input())

yesno = 0

for i in range(n):
    num = int(input())

    if(num==0):
        yesno -= 1
    else:
        yesno += 1


if yesno<0:
    print("Junhee is not cute!")
else:
    print("Junhee is cute!")