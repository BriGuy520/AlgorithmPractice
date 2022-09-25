def getX(x, nums):
  # write your code here

  for i in range(0, len(nums)):   
    low = i
    for j in range(i + 1, len(nums)):
      if nums[j] < nums[low]: 
        low = j
    if low != i:
      temp = nums[i]
      nums[i] = nums[low]
      nums[low] = temp
    
  return nums[x]


print(getX(2, [6, 3, -1, 5]))