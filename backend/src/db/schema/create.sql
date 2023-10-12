DROP TABLE IF EXISTS PHOTO;
DROP TABLE IF EXISTS TOPIC;
DROP TABLE IF EXISTS USER_ACCOUNT;

CREATE TABLE USER_ACCOUNT (
  ID SERIAL PRIMARY KEY NOT NULL,
  FULLNAME VARCHAR(255) NOT NULL,
  USERNAME VARCHAR(255) NOT NULL,
  PROFILE_URL VARCHAR(255) NOT NULL
);

CREATE TABLE TOPIC (
  ID INT PRIMARY KEY NOT NULL,
  TITLE VARCHAR(255) NOT NULL,
  SLUG VARCHAR(255) NOT NULL
);

CREATE TABLE PHOTO(
  ID SERIAL INT PRIMARY KEY NOT NULL,
  FULL_URL VARCHAR(255) NOT NULL,
  REGULAR_URL VARCHAR(255) NOT NULL,
  CITY VARCHAR(255) NOT NULL,
  COUNTRY VARCHAR(255) NOT NULL,
  USER_ID INTEGER REFERENCES USER_ACCOUNT(id) ON DELETE CASCADE,
  TOPIC_ID INTEGER REFERENCES TOPIC(id) ON DELETE CASCADE
);