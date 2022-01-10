# You'll be given a string, and have to return the sum of all characters as an int. 
# The function should be able to handle all ASCII characters.

# examples:

# uniTotal("a") == 97 uniTotal("aaa") == 291

def uni_total(s):
    #your code here
    
    sum = 0
    
    for char in s:
        sum += ord(char)
    
    print(sum)
        
uni_total("aaa")