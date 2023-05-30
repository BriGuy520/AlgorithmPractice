def count_consonants(s):
  
  consonants = 'bcdfghjklmnpqrstvwxyz'
  count = 0
  
  answer = sum(1 for c in s.lower() if c in consonants)
  
  print(answer)
    
  return count

  
count_consonants("Bbbbb") # 5
count_consonants("Hello world") # 7