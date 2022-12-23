def parse(data):
    # TODO: your code here

    total = 0
    answer = []
    
    for x in range(len(data)):
        if data[x] == 'i':
            total += 1
        elif data[x] == 'd':
            total -= 1
        elif data[x] ==  's':
            total *= total
        elif data[x] == 'o':
            answer.append(total)
    
    return answer