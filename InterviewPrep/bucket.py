items = [1, 4, 3, 9, 8, 3]

largest_area = 0

i = 0
j = len(items) - 1

while(i < j):

    gap = j - i

    if(items[i] < items[j]):
        area = items[i] * gap
        i = i + 1
    else:
        area = items[j] * gap
        j = j - 1
    
    if(area > largest_area):
        largest_area = area

print(f"The largest area is {largest_area}")



