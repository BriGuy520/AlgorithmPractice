def sum_middle(arr):
    
    if not arr:
        return 0
  
    return sum(sorted(arr)[1:len(arr) - 1])

sum_middle({6, 2, 1, 8, 10})