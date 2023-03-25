def power_func(a: float, n: int): 
    return int(a ** n)

a, n = map(float, input().split())
print(power_func(a, int(n)))