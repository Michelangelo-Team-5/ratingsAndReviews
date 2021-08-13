
CREATE DATABASE reviews;
USE reviews;

-- CREATE YOUR TABLES
CREATE TABLE reviews (
    id serial NOT NULL,
    product_id INT NOT NULL,
    rating INT NOT NULL,
    date DATE NOT NULL,
    summary text  NOT NULL,
    body text  NOT NULL,
    recommended bit NOT NULL,
    reported bit NOT NULL,
    reviewer_name text NOT NULL,
    reviewer_email text NOT NULL,
    respones text NULL,
    helpfullness INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reviews_photos (
    id serial NOT NULL,
    review_id INT NOT NULL REFERENCES reviews(id),
    url text  NOT NULL
);

CREATE TABLE characteristic_reviews (
    id serial NOT NULL,
    characteristic_id INT NOT NULL,
    review_id INT NOT NULL REFERENCES reviews(id),
    value INT NOT NULL
);

CREATE TABLE characteristics (
    id serial NOT NULL,
    product_id INT NOT NULL,
    name text  NOT NULL
);


-- ADD RECORDS TO YOUR TABLE
INSERT INTO reviews (name, )
    VALUES (

    ))