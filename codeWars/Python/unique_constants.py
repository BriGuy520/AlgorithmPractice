def count_consonants(text):

    consonants = "bcdfghjklmnpqrstvwxyz".split(" ")
    longest = 0
    prev = []

    print(consonants)


    for char in range(len(text)):
        if text[char].lower() in consonants and text[char] not in prev:

            longest += 1
            prev.append(text[char].lower())

            print(prev)

    print(longest)

    return longest


count_consonants("add") # 1
count_consonants("abcdefghijklmnopqrstuvwxyz") # 21
count_consonants("Count my unique consonants!!") # 7
count_consonants("aeiou") # 0
count_consonants("a7gHJ") # 3