# Given an array of integers, identify the first duplicate in the array. If no duplicates 
# exists, return -1

arr = [84, 49, 38, 58, 48, 85, 83, 28, 83, 49]

duplicate_counter = {}


def duplicate_check(my_arr):

    if len(my_arr) > 4:
        for element in my_arr:
            if element not in duplicate_counter:
                duplicate_counter[element] = 1
            else: 
                print(f'{element} is the first duplicate in the array')
                break

    else:
        print('array is too short')
        
    return -1

duplicate_check(arr)


