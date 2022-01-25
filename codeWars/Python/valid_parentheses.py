def valid_parentheses(string):
    #your code here
    
    open = 0
    close = 0
    
    for i in range(0, string.len):
        if string[i] == '(':
            open += 1
        else:
            close += 1
            
    if open == close:
        return True
    else:
        return False
