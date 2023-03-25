def xor_func(x, y): 
    if x == y: 
        return 0
    return 1

x, y = map(int, input().split())
print(xor_func(x, y))