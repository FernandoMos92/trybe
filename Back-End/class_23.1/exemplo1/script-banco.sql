CREATE DATABASE IF NOT EXIST model_database;

USE model_database;

DROP TABLE IF EXIST customer;

CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  cpf VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO customer (name, cpf, email, password) VALUES ('Goku', '655.859.854-96', 'goku@dbz.com', 'goku123'),
('Naruto','452.856.854-85', 'naruto@ship.com', 'naruto321'),
('Eren', '657.235.854-74', 'eren@titan.com', 'erenpomba');

SELECT * FROM customer;