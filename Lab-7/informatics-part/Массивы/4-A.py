spisok = list(map(int, input().split()))

for i in range(len(spisok)):
    if i % 2 == 0: 
        print(spisok[i], end = ' ')