def min_func(a, b, c, d): 
    return min(min(a, b), min(c, d))

spisok = list(map(int, input().split()))
print(min_func(spisok[0], spisok[1], spisok[2], spisok[3]))