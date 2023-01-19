def count_consonants(s):
  
  consonants = 'bcdfghjklmnpqrstvwxyz'
  count = 0
  
  for c in s.lower(): 
    if c in consonants: count += 1
    
  return count

  
count_consonants("Bbbbb") # 5
count_consonants("Hello world") # 7