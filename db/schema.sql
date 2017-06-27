CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
			`id` INTEGER(11) AUTO_INCREMENT NOT NULL,
            `burger_name` varchar(50) Not Null, 
            `devoured` boolean Not Null,
            `date` timestamp Not Null,
            PRIMARY KEY (`id`)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Royal Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Stevens Cafe Burger', FALSE);