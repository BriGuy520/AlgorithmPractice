# Find the second lowest integer in the array

# given an unordered array 

import array as arr

find_second_smallest = [11, 3, 29, 3, 40, 3, 5, 9]



for i in range(len(find_second_smallest)):

    low = i

    for j in range(low + 1, len(find_second_smallest)):

        if find_second_smallest[j] < find_second_smallest[low]:
            low = j
        
    if low is not i:
        temp = find_second_smallest[low]
        find_second_smallest[low] = find_second_smallest[i]
        find_second_smallest[i] = temp


the_set = list(set(find_second_smallest))

print(the_set[1])
