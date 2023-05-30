def solution(start, finish):  
        
    current_shelf = start
    jumps = 0
    
    while current_shelf < finish: 
        
        if current_shelf + 3 <= finish:

            current_shelf += 3
            
            jumps += 1
        else:
            current_shelf += 1
            
            jumps += 1;
        
    return jumps
  
solution(1, 5) # 2
solution(215, 413) # 66