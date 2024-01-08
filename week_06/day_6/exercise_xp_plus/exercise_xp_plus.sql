-- 🌟 Exercise 1 : Bootcamp
-- Instructions
-- For this exercise, you will have to find some requests on your own!

-- Create
-- Create a database called bootcamp.
CREATE DATABASE bootcamp;

-- Create a table called students.
CREATE TABLE students (
	id serial,
	last_name varchar(50),
	first_name varchar(50),
	birth_date date
);
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)

-- Here is the data:

-- id	first_name	last_name	birth_date
-- 1	Marc	Benichou	02/11/1998
-- 2	Yoan	Cohen	03/12/2010
-- 3	Lea	Benichou	27/07/1987
-- 4	Amelia	Dux	07/04/1996
-- 5	David	Grez	14/06/2003
-- 6	Omer	Simpson	03/10/1980


-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
INSERT INTO students (first_name, last_name, birth_date)
VALUES
	('Marc', 'Benichou', '1998-11-02'),
	('Yoan', 'Cohen', '2010-12-03'),
	('Lea', 'Benichou', '1987-07-27'),
	('Amelia', 'Dux', '1996-04-07'),
	('David', 'Grez', '2003-06-14'),
	('Omer', 'Simpson', '1980-10-03');

-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Anton', 'Dumov', '1995-06-28');

-- Select
-- Fetch all of the data from the table.
SELECT * FROM students;

-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

-- For the following questions, only fetch the first_names and last_names of the students.

-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students
WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name LIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students
WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a';

-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students
WHERE id = 1 AND id = 3;

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT first_name, last_name, birth_date FROM students
WHERE birth_date >= '2000-01-01';