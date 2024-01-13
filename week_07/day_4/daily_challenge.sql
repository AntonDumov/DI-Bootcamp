-- Daily Challenge: Tables Relationships
-- Instructions
-- You are going to practice tables relationships
--
-- Part I
--
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns :
-- id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

create table customer
(
    id         serial primary key,
    first_name varchar(50),
    last_name  varchar(50) not null
);

create table customer_profile
(
    id           serial primary key,
    is_logged_in bool default false,
    customer_id  integer references customer not null
);

-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

INSERT INTO customer (first_name, last_name)
VALUES ('John', 'Doe'),
       ('Jerome', 'Lalu'),
       ('Lea', 'Rive');

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in

INSERT INTO customer_profile (is_logged_in, customer_id)
VALUES (true, (SELECT id FROM customer WHERE first_name = 'John')),
       (false, (SELECT id FROM customer WHERE first_name = 'Jerome'));

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
SELECT c.first_name
FROM customer c
         JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.is_logged_in = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name, cp.is_logged_in
FROM customer c
         LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(c)
FROM customer c
         JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.is_logged_in;

-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

CREATE TABLE book
(
    book_id serial primary key,
    title   varchar(50) not null,
    author  varchar(50) not null
);

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K. Rowling'),
       ('To Kill a Mockingbird', 'Harper Lee');

-- Create a table named Student, with the columns :
-- student_id SERIAL PRIMARY KEY,
-- name NOT NULL UNIQUE,
-- age.
-- Make sure that the age is never bigger than 15 (Find an SQL method);

CREATE TABLE student
(
    student_id SERIAL PRIMARY KEY,
    name       varchar(50) NOT NULL UNIQUE,
    age        smallint check ( age <= 15 )
);

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT INTO student (name, age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
CREATE TABLE library
(
    book_fk_id    INT REFERENCES book ON DELETE CASCADE ON UPDATE CASCADE,
    student_id    INT REFERENCES student ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date date
);

-- This table, is a junction table for a Many to Many relationship with the Book and Student tables :
-- A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
--                                                                                                                                                                       Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (1, 1, '2022-02-15'),
       (3, 4, '2021-03-03'),
       (1, 2, '2021-05-23'),
       (2, 4, '2021-08-12');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM library l
         JOIN book b on b.book_id = l.book_fk_id
         JOIN student s on s.student_id = l.student_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT avg(s.age)
FROM student s
         JOIN library l on s.student_id = l.student_id
         JOIN book b on b.book_id = l.book_fk_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student s WHERE s.student_id = 1;
SELECT * FROM library;

-- The rows with that student were deleted as well.