# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

user_input = input("Enter a string: ")
if len(user_input) < 10:
    print("string not long enough")
elif len(user_input) > 10:
    print("string too long")
else:
    print("perfect string")
    # Then, print the first and last characters of the given text.
    print(user_input[0])
    print(user_input[-1])
    # Using a for loop, construct the string character by character:
    # Print the first character, then the second, then the third, until the full string is printed.
    # For example,
    # The user enters "HelloWorld"
    # Then, you have to construct the string character by character
    # H
    # He
    # Hel
    # ... etc.
    # HelloWorld

    for i in range(len(user_input)):
        print(user_input[:i+1])


    # 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).
    # For example, Hlrolelwod

    import random

    jumbled_string = list(user_input)
    random.shuffle(jumbled_string)
    jumbled_string = ''.join(jumbled_string)
    print(jumbled_string)
