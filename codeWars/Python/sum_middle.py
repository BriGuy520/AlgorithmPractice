def sum_array(arr):
    
    return 0 if not arr else sum(sorted(arr)[1:len(arr) - 1])

sum_middle({6, 2, 1, 8, 10})