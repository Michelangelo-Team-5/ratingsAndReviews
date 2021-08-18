\c reviews

-- CREATE YOUR TABLES
CREATE TABLE reviews (
    id serial NOT NULL,
    product_id INT NOT NULL,
    rating INT ,
    date BIGINT,
    summary text,
    body text,
    recommend boolean,
    reported boolean,
    reviewer_name text,
    reviewer_email text,
    response text NULL,
    helpfulness INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reviews_photos (
    id serial NOT NULL,
    review_id INT NOT NULL REFERENCES reviews(id),
    url text
);

CREATE TABLE characteristic_reviews (
    id serial NOT NULL,
    characteristic_id INT NOT NULL,
    review_id INT NOT NULL REFERENCES reviews(id),
    value INT
);

CREATE TABLE characteristics (
    id serial NOT NULL,
    product_id INT NOT NULL,
    name text
);
