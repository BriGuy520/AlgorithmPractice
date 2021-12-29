def buy(x,arr):  
    
    items = []
    
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] + arr[j] == x and i != j:
                items.append(i)
                items.append(j)
                print(items)
                return items
    return None
  
buy(4, [2, 3, 3, 1, 2, 1])