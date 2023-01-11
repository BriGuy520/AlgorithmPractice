def split(s):
    return [char for char in s]

def count_consonants(text):

    consonants = split("bcdfghjklmnpqrstvwxyz")
    total = 0
    prev = []

    for char in range(len(text)):
        if text[char].lower() in consonants and text[char].lower() not in prev:

            total += 1
            prev.append(text[char].lower())

    return total


count_consonants("add") # 1
count_consonants("abcdefghijklmnopqrstuvwxyz") # 21
count_consonants("Count my unique consonants!!") # 7
count_consonants("aeiou") # 0
count_consonants("a7gHJ") # 3
count_consonants("jjxBZhtcgWZp") # 10