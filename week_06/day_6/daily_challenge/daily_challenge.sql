-- Instructions
-- In this exercise we will be using the actors table from todays lesson.

-- 1. Count how many actors are in the table.
SELECT count(*) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
    ('', '', '', '')

-- It will return error, because we declared those fields with NOT NULL constraints