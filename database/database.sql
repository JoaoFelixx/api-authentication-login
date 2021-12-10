CREATE DATABASE  api_authentication_login;

USE api_authentication_login;

CREATE TABLE users(
  _id VARCHAR(255) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  
  PRIMARY KEY(_id)
);