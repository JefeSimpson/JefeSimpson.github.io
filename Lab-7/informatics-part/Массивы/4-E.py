spisok = list(map(int, input().split()))
i = 1
while i < len(spisok): 
    if spisok[i] >= 0 and spisok[i - 1] >= 0: 
        print(spisok[i - 1], spisok[i])
        break 
    i += 1