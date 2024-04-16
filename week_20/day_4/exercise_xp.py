from datetime import datetime, date
from random import randint, uniform


# 🌟 Exercise 1 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.
#
# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
#
# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40
#
# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40,
# set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly.
# Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().
#
# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December).
# Determine the season according to the month.


def get_random_temp(season):
    if season == 'winter':
        return uniform(-10, 16)
    elif season == 'spring':
        return uniform(0, 24)
    elif season == 'summer':
        return uniform(15, 40)
    elif season == 'autumn' or season == 'fall':
        return uniform(10, 30)


def main():
    month = int(input("Enter the number of the month: "))
    if month < 1 or month > 12:
        print("Please enter a valid number")
        return
    else:
        if month in [12, 1, 2]:
            season = 'winter'
        elif month in [3, 4, 5]:
            season = 'spring'
        elif month in [6, 7, 8]:
            season = 'summer'
        else:
            season = 'autumn'
    # season = input("Type in a season (e.g., 'summer', 'autumn', 'winter', or 'spring'): ")
    temperature = get_random_temp(season.lower())
    if type(temperature) == str:  # Invalid season handling
        print(temperature)
        return
    print(f"The temperature right now is {round(temperature, 2)} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temperature <= 23:
        print("The weather is still mild, it's pleasant outside.")
    elif 23 < temperature <= 32:
        print("It's getting hot, summer vibes.")
    elif 32 < temperature <= 40:
        print("It's so hot, take care of hydration today.")

main()

# 🌟 Exercise 2 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different
# messages depending on how well they did on the quiz.
#
# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_question(question, answer):
    user_answer = input(question)
    if user_answer.lower() == answer.lower():
        print("Correct!")
        return True
    else:
        print(f'Sorry "{user_answer}" was wrong. Right answer: "{answer}"')
        return False


def start_quiz():
    wrong_answers = []
    right_answers = []

    for question in data:
        if ask_question(question["question"], question["answer"]):
            right_answers.append(question)
        else:
            wrong_answers.append(question)

    print(f'You got {len(right_answers)} right answers. And you got {len(wrong_answers)} wrong answers.')
    if len(wrong_answers) > 3:
        if input('Would you like to play again? (y/n)') == 'y':
            start_quiz()
        else:
            print("Thanks for playing! May the Force be with you.")
    else:
        print("Congratulations! You did a great job on the quiz.")

start_quiz()


# Exercise 3 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).
#
# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints
#
# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

def get_age(year, month, day):
    today = date.today()
    current_year = today.year
    current_month = today.month
    current_day = today.day
    age = current_year - year
    if current_month < month or current_month == month and current_day < day:
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)
    if gender == 'm':
        return age >= 67
    elif gender == 'f':
        return age >= 62
    else:
        return False

def can_retire_ask():
    gender = input("Enter your gender (m/f): ").lower()
    date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ")
    if can_retire(gender, date_of_birth):
        print("Congratulations! You can retire.")
    else:
        print("Sorry, you cannot retire yet.")

can_retire_ask()


# Exercise 4:
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
#
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)
#
# Hint: treating our number as a int or a str at different points in our code may be helpful

def calculate_sum(x):
    return x + int(str(x) * 2) + int(str(x) * 3) + int(str(x) * 4)

calculate_sum(3)