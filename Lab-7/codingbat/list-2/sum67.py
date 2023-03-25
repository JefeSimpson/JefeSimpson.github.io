def sum67(nums):
  checker = False
  cnt = 0
  for num in nums:
    if num == 6:
      checker = True
    elif num == 7 and checker:
      checker = False
    elif not checker:
      cnt += num
      
  return cnt  
