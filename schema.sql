-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell
-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
CREATE DATABASE cows;
USE cows;

-- CREATE YOUR TABLES
CREATE TABLE cows (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

-- ADD RECORDS TO YOUR TABLE
INSERT INTO cows (name, description)
    VALUES (
        "Buttercup", "a herbaceous plant with bright yellow cup-shaped flowers,
        common in grassland and as a garden weed. All kinds are poisonous and
        generally avoided by livestock."
    ),
    (
        "Daisy", "a small grassland plant that has flowers with a yellow
         disk and white rays. It has given rise to many ornamental garden."
    )

    -- ,
    -- (
    --      "Milkshake", "a cold drink made of milk, a sweet flavoring such as
    --      fruit or chocolate, and typically ice cream, whisked until it is."
    -- ),
    -- (
    --      "MooDonna",
    --      "archaic : lady -- used as a form of respectful address."
    -- ),
    -- (
    --      "MooLawn", "a legendary Chinese warrior from the Northern
    --      and Southern dynasties period (420–589) of Chinese history."
    -- )