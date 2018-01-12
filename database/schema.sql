CREATE DATABASE IF NOT EXISTS airbnb;
USE airbnb;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'listings'
-- 
-- ---

DROP TABLE IF EXISTS `listings`;
		
CREATE TABLE `listings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `num_guests` INTEGER NOT NULL,
  `bedrooms` INTEGER NOT NULL,
  `bathrooms` INTEGER NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `summary` VARCHAR(255) NULL DEFAULT NULL,
  `neighborhood` VARCHAR(50) NULL DEFAULT NULL,
  `street_address` VARCHAR(255) NOT NULL,
  `zip_code` INTEGER NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(25) NOT NULL,
  `cancellation_policy` VARCHAR(255) NOT NULL,
  `nightly_price` INTEGER NOT NULL,
  `pic_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'bookings'
-- 
-- ---

-- DROP TABLE IF EXISTS `bookings`;
		
-- CREATE TABLE `bookings` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `listing_id` INTEGER NOT NULL,
--   `user_id` INTEGER NOT NULL,
--   `dateRented` INTEGER NULL DEFAULT NULL, 
--   PRIMARY KEY (`id`)
-- );

-- ALTER TABLE 'bookings' ADD CONSTRAINT id_date UNIQUE(listing_id, dateRented);


DROP TABLE IF EXISTS `bookings`;
    
CREATE TABLE `bookings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `listing_id` INTEGER NOT NULL,
  `user_id` INTEGER NOT NULL,
  `dateRented` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `bookings` ADD CONSTRAINT id_date UNIQUE(listing_id, dateRented);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `bookings` ADD FOREIGN KEY (listing_id) REFERENCES `listings` (`id`);
ALTER TABLE `bookings` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

 INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES 
 (1,
 4,
 2,
 1.5,
 'my house',
'description here',
 'beehives & restaurants.',
 'Roslindale',
 '123 Fake St',
 02111,
'Boston',
 'Ma',
 'Moderate',
 250,
 'https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=large');
 INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES 
 (2,
 3,
 5,
 3,
 'your house',
 'description also goes here',
 'this is a summary.',
 'Good neighborhood',
 '322 B St',
 02111,
 'Boston',
 'Ma',
'Strict',
 199,
'https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=large');
 INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES 
 (3,
 1,
 1,
 1,
 'a cardboard box',
 'a wet and soggy cardboard box on the sidewalk',
 'a box just outside of town',
 'Neighbortown',
 '000 Not real St',
 02111,
 'Boston',
 'Ma',
 'Casual',
 1,
 'https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=large');
 INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES 
 (4,
 12,
 5,
 6,
 "Marylin's Mansion",
 'A creepy place to be',
 'summary of mansion',
 'Roslindale',
 '333 Fake St',
 02111,
 'Boston',
 'Ma',
'Moderate',
 250,
 'https://a2.muscache.com/im/pictures/c0842db1-ee98-4fe8-870b-d1e2af33855d.jpg?aki_policy=large');
INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES
(5,2,3,4,'name','description','summary','neighborhood','street_address',34324,'san fran','cali','cancel',300,'url');
INSERT INTO `users` (`id`, `name`) VALUES (1, 'Viktor');
INSERT INTO `bookings` (`id`,`listing_id`, `user_id`, `dateRented`) VALUES (1, 1, 1, '2013-02-11');
INSERT INTO `bookings` (`id`,`listing_id`, `user_id`, `dateRented`) VALUES (2, 1, 1, '2013-02-12');

INSERT INTO `bookings` (`id`, `listing_id`, `user_id`, `dateRented`) VALUES (3, 3, 1, '2018-04-19');
INSERT INTO `bookings` (`id`, `listing_id`, `user_id`, `dateRented`) VALUES (4, 3, 1, '2018-04-20');
INSERT INTO `bookings` (`id`, `listing_id`, `user_id`, `dateRented`) VALUES (5, 3, 1, '2018-04-21');

INSERT INTO `bookings` (`id`, `listing_id`, `user_id`, `dateRented`) VALUES (6, 5, 1, '2018-05-01');
INSERT INTO `bookings` (`id`, `listing_id`, `user_id`, `dateRented`) VALUES (7, 5, 1, '2018-05-02');

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bookings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---
-- var fakeData = [{
--   num_guests: 3, 
--   bedrooms: 3,
--   bathrooms: 1,
--   name: 'A house',
--   description: 'A house in San Fran',
--   summary: 'A house in San Fran that you can stay at',
--   neighborhood: 'Richmond',
--   street_address: '123 somewhere road',
--   zip_code: 32234,
--   city: 'San Fran',
--   state: 'Cali',
--   cancellation_policy: 'A cancelation results in a 500$ fee',
--   nightly_price: 500,
--   pic_url: 'http://picture'
-- },
-- { 
--   num_guests: 2, 
--   bedrooms: 1,
--   bathrooms: 1,
--   name: 'An apartment',
--   description: 'An apartment in San Fran',
--   summary: 'A apartment in San Fran that you can stay at',
--   neighborhood: 'Riverside',
--   street_address: '456 road',
--   zip_code: 32674,
--   city: 'San Fran',
--   state: 'Cali',
--   cancellation_policy: 'No cancelation policy',
--   nightly_price: 200,
--   pic_url: 'http://picture'
-- },
-- {
--   num_guests: 3, 
--   bedrooms: 2,
--   bathrooms: 2,
--   name: 'Beach House',
--   description: 'A house on the beach in San Fran',
--   summary: 'A house by the beach in San Fran that you can stay at',
--   neighborhood: 'Sunset',
--   street_address: '422 e road',
--   zip_code: 32520,
--   city: 'San Fran',
--   state: 'Cali',
--   cancellation_policy: 'A cancelation within 5 days of first night results in 300$ fee. ',
--   nightly_price: 500,
--   pic_url: 'http://picture'
-- }]

-- var fakeBookings = [{
--   user_id: 1,
--   data: 
-- }
-- ]

-- INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES
-- ('','','','','','','','','','','','','','','');
-- INSERT INTO `bookings` (`id`,`listing_id`,`user_id`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');