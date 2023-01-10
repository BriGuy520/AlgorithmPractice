def to_weird_case(words):
  
    answer = ''

    for word in words.split():
        for x in range(len(word)):
            if x % 2 == 0: answer = answer + word[x].upper()
            else: answer = answer + word[x].lower() 


        answer = answer + ' '    
  
    return answer.strip()


to_weird_case("hello world")