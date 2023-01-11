def is_defended(attackers, defenders):

    defender_win = 0
    defender_total = sum(defenders)
    attacker_win = 0
    attacker_total = sum(attackers)

    if len(attackers) > len(defenders):
        defenders.extend([0] * (len(attackers) - len(defenders)))
    elif len(attackers) < len(defenders): 
        attackers.extend([0] * (len(defenders) - len(attackers)))
        
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

        return True if defender_total >= attacker_total else False