def pentagonal(n):
    #hajime
  if(n == 1): return 1
  if(n <= 0): return -1   
  
  total = 1
    
  for x in range(1, n):
 
    total = total + (x * 5)  
  
  return total
  

pentagonal(8)
