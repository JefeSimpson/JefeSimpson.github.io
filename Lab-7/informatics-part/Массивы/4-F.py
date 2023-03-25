spisok = list(map(int, input().split()))
cnt = 0

for i in range(1, len(spisok) - 1): 
    if spisok[i] > spisok[i - 1] and spisok[i] > spisok[i + 1]: 
        cnt += 1

print(cnt)