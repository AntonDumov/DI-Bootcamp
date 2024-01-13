-- 🌟 Exercise 1: DVD Rental
-- Instructions

-- Get a list of all the languages, from the language table.
SELECT *
FROM language;

-- Get a list of all films joined with their languages – select the following details :
-- film title, description, and language name.
SELECT film.title, film.description, l.name
FROM film
         LEFT JOIN language l on l.language_id = film.language_id;

-- Get all languages, even if there are no films in those languages – select the following details :
-- film title, description, and language name.
SELECT l.name, f.title, f.description
FROM language l
         LEFT JOIN film f on l.language_id = f.language_id;

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
    review_id   serial,
    film_id     integer references new_film on delete CASCADE,
    language_id integer references language on delete CASCADE,
    title       varchar(100),
    score       smallint,
    review_text text,
    last_update date
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1, 1, 'Review of Interstellar', 5, 'Blah blah blah', '2024-01-13'),
       (2, 2, 'Recensione di The Godfather', 9, 'Bla bla bla', '2024-01-13');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE
FROM new_film
WHERE id = 2;

SELECT *
FROM customer_review;
-- The row, which was related to this film was also deleted.

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 3
WHERE film_id = 5;

-- Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?

-- address_id and store_id. We need to be sure the addresses and stores are exist in related table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(r)
FROM rental r
WHERE r.return_date is null;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title
FROM film f
         JOIN inventory i on f.film_id = i.film_id
         JOIN rental r on i.inventory_id = r.inventory_id
WHERE r.return_date is NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie.
-- He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT f.title, f.description
FROM film f
         JOIN film_actor fa on f.film_id = fa.film_id
         JOIN actor_info ai on fa.actor_id = ai.actor_id
WHERE ai.first_name = 'Penelope'
  AND ai.last_name = 'Monroe'
  AND (lower(f.description) LIKE '%sumo%' OR lower(f.description) LIKE '%wrestle%');

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.title
FROM film f
         JOIN film_category fc on f.film_id = fc.film_id
         JOIN category c on fc.category_id = c.category_id
WHERE f.rating = 'R'
  AND f.length < 60
  AND c.name = 'Documentary';

-- The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT f.title
FROM rental r
         JOIN inventory i on i.inventory_id = r.inventory_id
         JOIN film f on f.film_id = i.film_id
WHERE rental_id IN
      (SELECT p.rental_id
       FROM payment p
       WHERE p.customer_id IN
             (SELECT c.customer_id FROM customer c WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan')
         AND p.amount > 4)
  AND r.return_date
    > '2005-07-28'
  AND r.return_date
    < '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT f.title, f.replacement_cost, f.description
FROM film f

WHERE lower(f.title) LIKE '%boat%'
   OR lower(f.description) LIKE '%boat%'
    AND f.film_id IN
        (SELECT i.film_id
         FROM inventory i
         WHERE i.inventory_id IN
               (SELECT r.inventory_id
                FROM rental r
                WHERE r.customer_id IN
                      (SELECT c.customer_id FROM customer c WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan')))
ORDER BY f.replacement_cost DESC LIMIT 1;