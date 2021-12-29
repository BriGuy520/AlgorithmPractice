def incrementer(nums):
    # your code here
    
    double_arr = []
    count = 1
    
    for num in nums:
        last_digit = (num + count) % 10
        print(last_digit)
        double_arr.append(last_digit)
        count += 1
                
    return double_arr
  
incrementer([3, 4, 2, 3, 9, 9, 9])