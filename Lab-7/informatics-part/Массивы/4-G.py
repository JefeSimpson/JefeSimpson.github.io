spisok = list(map(int, input().split()))
elem = -1943123
index = -1

for i in range(len(spisok)): 
    if elem < spisok[i]: 
        elem = spisok[i]
        index = i

print(elem, index)