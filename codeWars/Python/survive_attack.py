def is_defended(attackers, defenders):

    defender_win = 0
    defender_total = sum(defenders)
    attacker_win = 0
    attacker_total = sum(attackers)

    print(attacker_total, defender_total)

    for x, y in zip(attackers, defenders):

        if x < y:

            defender_win += 1

        else: 
            attacker_win += 1


    if defender_win > attacker_win:

        return True
    
    elif defender_win < attacker_win:

        return False
    else:

        return True if defender_total > attacker_total else False





    



attackers = [1, 3, 5, 6, 8]
defenders = [2, 4]

is_defended(attackers, defenders) # True