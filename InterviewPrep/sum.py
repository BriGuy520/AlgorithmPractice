
numbers_to_add = [4, 6, 39, 2, 48, 3, 5, 11, 8]

sum = 13;

results = []

for x in numbers_to_add: 
    for y in numbers_to_add:
        if(x + y == sum):
            results.append([x,y]);

print(results)



        
