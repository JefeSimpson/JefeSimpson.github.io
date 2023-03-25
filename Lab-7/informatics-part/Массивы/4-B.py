spisok = list(map(int, input().split()))

for i in spisok:
    if i % 2 == 0: 
        print(i, end = ' ')