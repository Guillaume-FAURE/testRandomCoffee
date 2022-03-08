/* INITALISE THE DATABASE */
CREATE TABLE friends(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150),
    age INT,
    city VARCHAR(150),
    gender_id INT,
    FOREIGN KEY (gender_id) REFERENCES gender(id)
);
CREATE TABLE gender(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150),
);
INSERT INTO gender (name) VALUES
    ('homme'),
    ('femme'),
    ('autres')
;
INSERT INTO friends (name,city,age) VALUES 
    ('Romain','Paris',21,1),
    ('Thomas','Metz',22,1),
    ('Alexandre.L','Paris',21,1),
    ('Alexandre.D','Monaco',20,1),
    ('Claudie','Lyon',21,2)
;
CREATE TABLE imt_students(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150),
    surname VARCHAR(150),
    promo INT,
    age INT,
    city VARCHAR(150)
);
INSERT INTO imt_students(name, surname, promo, age, city) VALUES 
    ('Guillaume','FAURE',2023,21,'Paris'),
    ('Guillaume','JUDEZ',2022,21,'Nord'),
    ('John','Doe',1999,43,'New York')
;

/* JOIN */

SELECT *
FROM friends
JOIN gender ON friends.gender_id = gender.id;

SELECT *
FROM friends
LEFT JOIN gender ON friends.gender_id = 

SELECT *
FROM friends
RIGHT JOIN gender ON friends.gender_id = gender.id;

SELECT *
FROM friends
FULL OUTER JOIN gender ON friends.gender_id = gender.id;

SELECT * 
FROM friends
ORDER BY name ASC;
/* Care with the group by because it can hid data, for example with group by age, the 2 guillaume are regrouped and we see only the first */
SELECT *
FROM imt_students
GROUP BY age;

SELECT COUNT(name), city
FROM friends
GROUP BY city
ORDER BY city ASC

INSERT INTO friends (name,city,age) VALUES 
    ('Romain','Paris',21),
    ('Thomas','Metz',22),
    ('Alexandre.L','Paris',21),
    ('Alexandre.D','Monaco',20)
;

WITH count_duplicate AS
(SELECT *, ROW_NUMBER() OVER (
PARTITION BY name, city, age ORDER BY name,city, age) 
AS row_num FROM friends) 
DELETE FROM count_duplicate
WHERE row_num > 1User.email=UserDistinct.email WHERE User.id < UserDistinct.id;