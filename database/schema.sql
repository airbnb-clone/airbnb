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

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bookings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES
-- ('','','','','','','','','','','','','','','');
-- INSERT INTO `bookings` (`id`,`listing_id`,`user_id`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');