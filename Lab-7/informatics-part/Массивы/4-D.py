spisok = list(map(int, input().split()))

for i in range(1, len(spisok)):
    if spisok[i] > spisok[i - 1]: 
        print(spisok[i], end = ' ')
            