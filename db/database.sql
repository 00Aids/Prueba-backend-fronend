DROP DATABASE IF EXISTS PruebaG2;
CREATE DATABASE IF NOT EXISTS PruebaG2;
USE PruebaG2;

DROP TABLE IF EXISTS Usuario;

 CREATE TABLE Usuario(
 	id INT(11) AUTO_INCREMENT PRIMARY KEY,
   Nombre VARCHAR(40) NOT NULL,
   Email VARCHAR(60) NOT NULL UNIQUE,
   Edad INT(3) NOT NULL
 );