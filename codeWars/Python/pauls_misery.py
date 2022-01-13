# Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead 
# a normal life, with other activities. But he just can't stop solving all the kata!!

# Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

# kata = 5
# Petes kata = 10
# life = 0
# eating = 1
# The Misery Score is the total points gained from the array. Once you have the total, return as follows:

# < 40 = 'Super happy!'
# < 70 >= 40 = 'Happy!'
# < 100 >= 70 = 'Sad!'
# > 100 = 'Miserable!'

def paul(x):
    # your code here
    
    misery_score = 0
    
    for value in x:
        
        if(value == 'kata'):
            misery_score += 5
        elif(value == 'Petes kata'):
            misery_score += 10
        elif(value == 'eating'):
            misery_score += 1
    
    
    if(misery_score < 40):
        return 'Super happy!'
    elif(misery_score >= 40 and misery_score < 70):
        return 'Happy!'
    elif(misery_score < 100 and misery_score >= 70):
        return 'Sad!'
    elif(misery_score > 100):
        return 'Miserable!'
    