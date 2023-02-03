CREATE DATABASE revisao;

CREATE TABLE IF NOT EXISTS TODOS (
	id BIGSERIAL PRIMARY KEY, 
	name VARCHAR(45) UNIQUE NOT NULL,
	description VARCHAR(100) NOT NULL,
	startdate DATE NOT NULL,
	enddate DATE NOT NULL,
	status BOOLEAN DEFAULT FALSE NOT NULL,
	priority VARCHAR(1) DEFAULT '0' NOT NULL
)




SELECT * FROM todos;


INSERT INTO 
	todos(name, description, startDate, endDate, status, priority)
VALUES 
	('Taks 1', 'Description', '2023-02-03', '2023-02-03', FALSE, '0')
	
	
UPDATE todos SET
	name = 'Task 10',
	description = 'Description 10',
	startDate = '2023-02-03',
	endDate = '2023-02-03',
	status = TRUE,
	priority = '0'
WHERE 
	id = 3
	
	
	
DELETE FROM todos 
WHERE id = 3