-- 🌟 Exercise 1: DVD Rental
-- Instructions

-- Get a list of all the languages, from the language table.
SELECT *
FROM language;

-- Get a list of all films joined with their languages – select the following details :
-- film title, description, and language name.
SELECT film.title, film.description, l.name
FROM film
         LEFT JOIN public.language l on l.language_id = film.language_id;

-- Get all languages, even if there are no films in those languages – select the following details :
-- film title, description, and language name.
SELECT l.name, f.title, f.description
FROM language l
         LEFT JOIN public.film f on l.language_id = f.language_id;

-- Create a new table called new_film with the following columns :
-- id, name. Add some new films to the table.
CREATE TABLE new_film
(
    id   serial primary key,
    name varchar(100)
);

INSERT INTO new_film (name)
VALUES ('Interstellar'),
       ('The Godfather');

-- Create a new table called customer_review, which will contain film reviews that customers will make.

-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review
(
    review_id serial,
    film_id integer references new_film on delete CASCADE,
    language_id integer references language on delete CASCADE,
    title varchar(100),
    score smallint,
    review_text text,
    last_update date
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1, 1, 'Review of Interstellar', 5, 'Blah blah blah', '2024-01-13'),
       (2, 2, 'Recensione di The Godfather', 9, 'Bla bla bla', '2024-01-13');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE id=2;

SELECT * FROM customer_review;
-- The row, which was related to this film was also deleted.