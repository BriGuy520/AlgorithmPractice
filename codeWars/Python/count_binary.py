import re

def count_bits(n):
    
    into_binary = format(n, 'b')
    pattern = '[1]'
    
    return len(re.findall(pattern, into_binary))
  
count_bits(1234)