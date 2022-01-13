# Create a function that takes an integer as an argument and returns "Even" for even 
# numbers or "Odd" for odd numbers.

def even_or_odd(number):

    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


even_or_odd(56)
even_or_odd(38)
even_or_odd(43)
even_or_odd(33)
even_or_odd(8632)
even_or_odd(8648723)