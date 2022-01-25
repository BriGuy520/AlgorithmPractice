def DNA_strand(dna):
    # code here
    
    list_of_symbols = list(dna)
    
    for i in range(0, len(dna)):
        if list_of_symbols[i] == 'A':
            list_of_symbols[i] = 'T'
        elif list_of_symbols[i] == 'T':
            list_of_symbols[i] = 'A'
        elif list_of_symbols[i] == 'G':
            list_of_symbols[i] = 'C'
        else:
            list_of_symbols[i] = 'G'
    
    return "".join(list_of_symbols)
            
DNA_strand('AAAA')
DNA_strand('TTTT')
DNA_strand('GTAT')
DNA_strand('CCAG')