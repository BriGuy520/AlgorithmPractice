def buy(x,arr):  
    
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] + arr[j] == x and i != j:
                return [i, j]
    return None
  
buy(4, [2, 3, 3, 1, 2, 1])