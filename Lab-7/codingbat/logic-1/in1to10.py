def in1to10(n, outsideMode):
  if outsideMode:
    return n <= 1 or n >= 10
  return n >= 1 and n <= 10