spisok = list(map(int, input().split()))
cnt = 0

for i in spisok:
    if i > 0: 
        cnt += 1
        
print(cnt)