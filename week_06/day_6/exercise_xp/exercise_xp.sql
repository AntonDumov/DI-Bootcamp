-- 🌟 Exercise 1 : Items And Customers


-- Create a database called public.
CREATE DATABASE public;

-- Add two tables:
-- items
-- customers.

-- I had to reconnect to new database
CREATE TABLE items (
	id SERIAL,
	name VARCHAR(50),
	price INTEGER
);
CREATE TABLE customers (
	id SERIAL,
	first_name VARCHAR(50),
	last_name VARCHAR(50)
);

-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

INSERT INTO items (name, price)
VALUES
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80);

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

INSERT INTO customers (first_name, last_name)
VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Malanie', 'Johnson');

-- Use SQL to fetch the following data from the database:

-- All the items.
SELECT * FROM items;

-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?). -- nothing
SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name = 'Jones';

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE first_name != 'Scott';