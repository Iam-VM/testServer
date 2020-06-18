CREATE TABLE students(
    id SMALLSERIAL,
    "name" VARCHAR(100),
    "email" VARCHAR(200),
    "score" INTEGER
);

INSERT INTO students("name", "email", "score") VALUES
('Vishnu', 'vishnumohanantheking@gmail.com', 100),
('Anjas', 'anjaspkd@gmail.com', 98),
('Ramees', 'thayatlabs@gmail.com', 88),
('Abhijith K K', 'kkabhijith@gmail.com', 95),
('Abhijith K', 'abhijithabhi@gmail.com', 80);