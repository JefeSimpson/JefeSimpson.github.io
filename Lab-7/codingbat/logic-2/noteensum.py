def no_teen_sum(a, b, c):
  cnt = 0
  if a < 13 or a > 19 or a is 15 or a is 16: 
    cnt += a
  
  if b < 13 or b > 19 or b is 15 or b is 16: 
    cnt += b
    
  if c < 13 or c > 19 or c is 15 or c is 16: 
    cnt += c
    
  return cnt
