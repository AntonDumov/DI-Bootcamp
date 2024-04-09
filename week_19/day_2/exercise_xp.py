# Exercise 1 : Hello World
# Instructions
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

print('Hello world\n'*4)

# Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of: (99^3)*8
# (meaning 99 to the power of 3, times 8).

result = (99**3) * 8

# Exercise 3 : What is the output ?[^1^][1]
# Instructions
# Predict the output of the following code snippets:

# >>> 5 < 3
# False

# >>> 3 == 3
# True

# >>> 3 == "3"
# False

# >>> "3" > 3
# Error

# >>> "Hello" == "hello"
# False

# Exercise 4 : Your computer brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following:
# "I have a <computer_brand> computer" .

computer_brand = "ThinkPad"
print("I have a", computer_brand, "computer.")

# Exercise 5 : Your information
# Instructions
# Create a variable called name, and set its value to your name.
# Create a variable called age, and set its value to your age.
# Create a variable called shoe_size, and set its value to your shoe size.
# Create a variable called info and set its value to an interesting sentence about yourself.
# The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = "Anton"
age = 28
shoe_size = 42
info = "My name is " + name + ", I am " + str(age) + " years old, and my shoe size is " + str(shoe_size) + "."
print(info)

# Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print "Hello World".

a, b = 1, 2
if a > b:
    print('Hello world')

# Exercise 7 : Odd or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# Exercise 8 : What’s your name ?
# Instructions
# Write code that asks the user for their name and determines whether you have the same name,
# print out a funny message based on the outcome.
user_name = input("What's your name? ")
if user_name == "Anton":
    print("Hey, we have the same name!")
else:
    print("Nice to meet you, " + user_name + "!")

# Exercise 9 : Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.
height = int(input("Enter your height in centimeters: "))
if height > 145:
    print("You are tall enough to ride.")
else:
    print("You need to grow some more to ride.")