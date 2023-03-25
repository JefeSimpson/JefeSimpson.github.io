num = int(input())

STEPHEN = 0

while 2**STEPHEN < num:
    STEPHEN += 1
print(STEPHEN)