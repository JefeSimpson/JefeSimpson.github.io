def max_end3(nums):
  pos = -1
  if nums[0] >= nums[-1]:
    pos = 0
  return [nums[pos], nums[pos], nums[pos]]