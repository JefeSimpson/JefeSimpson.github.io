num = int(input())

twos = 1

while 1: 
    if num == twos: 
        print('YES')
        break
    if num < twos: 
        print('NO')
        break
    twos *= 2