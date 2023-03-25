def make_chocolate(small, big, goal):
  max_big_bars = goal // 5
  if big > max_big_bars:
    big = max_big_bars
  remaining_weight = goal - big*5
  if small >= remaining_weight:
    return remaining_weight
  else:
    return -1  