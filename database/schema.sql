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
  `rating` INTEGER NOT NULL,
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

-- INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES
-- ('','','','','','','','','','','','','','','');
-- INSERT INTO `bookings` (`id`,`listing_id`,`user_id`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');

-- INSERT INTO `listings` (`id`,`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`) VALUES
-- ('','','','','','','','','','','','','','','');
-- INSERT INTO `bookings` (`id`,`listing_id`,`user_id`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');

INSERT INTO `users` (name) VALUES ('Mr. Userman');
INSERT INTO `users` (name) VALUES ('Mrs. Otheruser');




INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','Cottage in the Heart of Ballard','A cozy cottage behind a lovely Victorian house. It has a 3/4 bath (shower). The cottage has a brick patio and a large trellis covered with roses and grapevines set in an English Garden.','A cozy cottage behind a lovely Victorian house with separate access and a 3/4 (meaning shower but no bathtub) bathroom. The cottage has a brick patio and a large trellis on the south side covered with roses, grape vines, and wisteria.','Ballard','2311 NW Market St','98107','Seattle','Washington','Moderate','89','https://a0.muscache.com/im/pictures/6a637b4f-54d4-4806-b64d-9d180f4a54ad.jpg?aki_policy=xx_large', 3);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','SEATTLE LOFT GUEST HOUSE', ' An oasis minutes from downtown, this loft guest house is it\'s own unique space with an open floor plan, tall ceilings with lots of natural light, gas stove, radiant floor heating, and a large patio with hot tub and tranquil gardens.','This loft guest house is a unique, tranquil space built by the owner himself. Situated on a large property in Beacon Hill, the space has tall ceilings, lot\'s of natural light and it\'s own private garden and hot tub.','Beacon Hill','3315 Beacon Ave S','98144','Seattle','Washington','Strict','89','https://a0.muscache.com/im/pictures/0c321dfe-0e70-4d58-a42a-ae152950c920.jpg?aki_policy=xx_large', 5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','Capitol Hill Stylish Garden Cottage','Small Space, Big Style, Spectacular Location with a Free Parking Space Tucked into a lush courtyard, this cottage in Seattle\'s renowned Harvard-Belmont Historic District is a real gem.','Small Space, Big Style, Spectacular Location with a Free Parking Space. Tucked into a lush courtyard, this cottage in Seattle\'s renowned Harvard-Belmont Historic District is a real gem.','Capitol Hill','1118 E Pike St','98122','Seattle','Washington','Moderate','99','https://a0.muscache.com/im/pictures/dfef40c4-1631-45f6-bd92-7de3eb707b3a.jpg?aki_policy=xx_large', 4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','Ballard Backyard Cottage','The Cottage, built in 2016, is tucked behind the main house. It is a fully permitted 350 square feet studio space with a beautifully appointed bathroom. Guests also have the use of the patio seating area and BBQ outside the french doors of the Cottage.','This adorable cottage comes complete with queen bed, hardwood flooring, kitchenette with Farmhouse sink, kitchen island, fridge freezer, Kuerig coffee maker, toaster, slow cooker, and induction hot plate.','Ballard','5233 Ballard Ave NW,','98107','Seattle','Washington','Moderate','99','https://a0.muscache.com/im/pictures/36e791b1-4877-488d-b3eb-214b8e88d875.jpg?aki_policy=xx_large', 3);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','"Little House" Living in Ballard','Our Little House is easy walking distance from some of Seattle\'s best coffee, restaurants, markets and retail stores. The house includes shared access to a courtyard, outdoor seating and a BBQ grill.','The house is 363 square feet and contains a sleeping loft accessed by a ship style ladder. Guests access the house through a separate gate at the end of our driveway, which opens into the courtyard. The house is quiet and comfortable.','Ballard','2236 NW Market St','98107','Seattle','Washington','Strict','89','https://a0.muscache.com/im/pictures/ef45e067-75a8-4fcf-abae-10beb6a132fc.jpg?aki_policy=xx_large',5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('3','1','1','Tiny House in Seattle','We designed and built this modern/rustic tiny house and are excited to share it with you! The house is located in the heart of West Seattle in a quiet neighborhood minutes away from the Alaska Junction, Lincoln Park, Alki Beach and more.','The tiny house is an excellent fall/winter get away. Listen to the rain fall on the metal roof as you read a book in the comfortable loft bed with thick down comforter. The cozy cabin feel is great for lounging on the sofa next to the electric fireplace.','West Seattle','6413 California Ave SW','98136','Seattle','Washington','Strict','140','https://a0.muscache.com/im/pictures/386ceb65-36f9-4791-8c9d-9824e457b00e.jpg?aki_policy=xx_large', 2);

INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (5,2,2,'Beach Bungalow steps from the Ocean and Bay!','This cute South Mission Beach is PERFECT for a small family or couples who want to get away and enjoy a peaceful vacation right on Mission Beach and experience San Diego the right way!','San Diego Beachpad','South Mission Beach','719 Ensenada Ct',92109,'San Diego','California','Moderate',87,'https://a0.muscache.com/im/pictures/77413f96-9a06-45d5-9149-a66c300b0080.jpg?aki_policy=large',5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (16,4,2,'LA JOLLA OCEAN & SUNSET VIEWS, Beach, Restaurants!','Let the whole family ENJOY. 4 Bedrooms, 2 Baths, One-Level, Open Concept, Entertainment with plenty of outdoor enclosed space with converted garage! Sleeps 20.','La Jolla Vacation Home','La Jolla','2000 Spindrift Dr',92037,'San Diego','California','Moderate',49,'https://a0.muscache.com/im/pictures/11431332/4eb5582b_original.jpg?aki_policy=large',1);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Hillcrest Luxury Apartment','Recently updated luxury interior. In unit washer and dryer. Quartz countertops, high gloss white cabinets, new stainless steel appliances. Walk to restaurants, grocery store, shops. Minutes to Downtown, Bankers Hill, and North Park.','Hillcrest apartment','Hillcrest','4135 Park Blvd',92103,'San Diego','California','Moderate',67,'https://a0.muscache.com/im/pictures/76265073/67b737a0_original.jpg?aki_policy=large',3);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (4,1,1,'Spacious 1bdr! Water View! Near GasLamp/Zoo+Beach','Spacious Upscale Downtown 1bdr! City/Water view! Steps From GasLamp. Mins from Beach +Zoo! 26th floor (PENTHOUSE LEVEL) Fantastic list of amenities such as JACUZZI, ROOFTOP POOL, warm and cozy BONFIRE AREA... FITNESS ROOM! AND computer room available..','Downtown pad','Gaslamp','1281 Ninth Ave',92101,'San Diego','California','Moderate',220,'https://a0.muscache.com/im/pictures/f6ee0bd9-1331-4a2a-a395-19da1c5f038b.jpg?aki_policy=large',2);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (3,1,1,'Secluded 1 Bedroom Hideaway','This is our latest 1bedroom renovation! We are located in Hillcrest, a popular urban neighborhood. Walkable to the Hillcrest Sunday Farmer\'s Market, Balboa Park and many restaurants and shopping. Easy access to walk to Hillcrest.','1 Bedroom Hideaway','Hillcrest','3766 Fifth Ave',92103,'San Diego','California','Moderate',53,'https://a0.muscache.com/im/pictures/f6ee0bd9-1331-4a2a-a395-19da1c5f038b.jpg?aki_policy=large',5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Bold 1BR in North Park by Sonder',"At this Sonder, you'll love the large, bright windows, artsy decor, and beautiful private balcony. Located in North Park, one of San Diego's trendiest neighborhoods, and less than 10-minute drive to the San Diego Zoo.",'1BR in North Park','Northpark','2010 30th Street',92104,'San Diego','California','Moderate',69,'https://a0.muscache.com/im/pictures/a7c02fcd-cd5f-4b96-a4a3-ad35eca7931f.jpg?aki_policy=large',4);

INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('34','1','2','HackReactor 8th Floor Penthouse Suite','Code all day and night and experience no comforts and no home away from home.','Penthouse suite with the city\'s brightest soon-to-be engineers','Tenderloin','944 Market Street',94102,'San Francisco','California','Severe',9272,'https://static1.squarespace.com/static/522a22cbe4b04681b0bff826/t/53fbc683e4b031fad5b5af12/1409009283390/Ionic-workshop.JPG', 1);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('2','1','1','Potrero Hill Garden Cabana','Excellent location for getting around town while staying in a wine country atmosphere, or hang out close by and enjoy some of the finest restaurants and cafes in San Francisco. No kidding!','My property was designed with the quiet and mature adult in mind, the guest who is looking for a respite in the City, for a place to catch up on much needed sleep and restoration ','Potrero Hill','1001 Mariposa Street','94107','San Francisco','California','Strict','200','https://a0.muscache.com/im/pictures/8037338/b11427ee_original.jpg?aki_policy=xx_large', 4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES ('8','3','2','CHARMING, VERY SPACIOUS & BEST LOCATED','It has lots of charm and luxurious details such as the very high ceilings with original plaster crown molding and the beautiful floors with original Barcelona-style hydraulic tiles.','The apartment is located in an area with great selection of restaurants and bars, close to public transportation and with many stores and supermarkets nearby.','Nob Hill','2424 Mariposa Street','94110','San Francisco','California','Severe','231','https://a0.muscache.com/im/pictures/7255437/22cc8c2d_original.jpg?aki_policy=xx_large', 5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (4,2,1,'Grand and Cozy 1920\'s SF Studio','THIS BEAUTIFUL APARTMENT was once a corner store. It has been remodeled to make a very comfortable living space. It consists of one very large room with a sleeping area sectioned off by curtains. It also has an attractive bathroom and a closet.','Come enjoy our large studio in San Francisco\'s charming and convenient Bernal Heights! You\'ll enjoy your own cozy and private lodging with a romantic gas fireplace, wood and stone floors and artistic decor.','Bernal Heights','453 Cortland Ave',94102,'San Francisco','California','Moderate',192,'https://a0.muscache.com/im/pictures/4618836/d2a84479_original.jpg?aki_policy=xx_large',3);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Upscale Private Ensuite Bed & Bath','Great spot for exploring the city by foot, bus, car or cablecar. If you plan to drive or bus most of the major sights are within a 15-minute drive from the house. There is a twenty-dollar charge for double occupancy. We’re a good deal in the city.','Private bedroom with queen bed & spa-like bath/shower over tub. Located inside a recently renovated Victorian in Pacific Heights near Fillmore, Lower Pac Heights. Walk Score 100, great neighborhood safe & fun place to stay in the city.','Bernal Heights','309 Cortland Ave',94102,'San Francisco','California','Casual',109,'https://a0.muscache.com/im/pictures/57115517/3bdd93e6_original.jpg?aki_policy=xx_large',5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Charming SF 1911 Studio','The private sidewalk level suite, is clean and comfortable with original windows and doors providing natural light and fresh air. It\'s San Francisco living so you can be sure to hear the sounds of a trolley passing by.','Private entry, sidewalk-level suite of living room, kitchen, bedroom and bath with artful touches in 1911 Edwardian. Close to beaches, GGate Park + Bridge, groceries, restaurants on city-wide trolly line for memorable vacation/business/retreat.','College Hill','3781 Mission St',94102,'San Francisco','California','Strict',105,'https://a0.muscache.com/im/pictures/94499169/3f744bb6_original.jpg?aki_policy=xx_large',1);

INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (4,2,1,'Maison Marais 2: Large Local Living','A good fit for two individuals or couples, you’ll be living like a local on the edge of the historic Faubourg Marigny. These pleasant, mostly residential neighborhoods offer some of NOLA\'s best restaurants, coffee shops and music venues.','Maison Marais 2 is an amazing two-bedroom deluxe apartment in a heritage shotgun house with high ceilings, hardwood floors and spacious rooms. “A top-notch experience” just three blocks from a streetcar line and steps from the popular St Roch Market','Uptown','717 Conti St.',70130,'New Orleans','Louisiana','Strict',102,'https://a0.muscache.com/im/pictures/2352461/f7adcb2f_original.jpg?aki_policy=xx_large',5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (9,4,2,'Maison Creole','We are walking distance to Jazz Fest and the French Quarter! Our quaint, Newly Renovated Guest Cottage is nestled behind our Historic Home in the heart of one of New Orleans’ most Historic Neighborhoods.','Garden District Gem!! This newly renovated, traditional New Orleans style Townhome is 3000 with all the comforts and amenities from your own home.','Garden District','1403 Washington Ave',70130,'New Orleans','Louisiana','Moderate',650,'https://a0.muscache.com/im/pictures/94e8660b-d46f-494b-a609-9f0ba4b99c56.jpg?aki_policy=xx_large',4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (6,3,2,'Fab Garden Dist/Magazine Townhome/Ideal location!','All the charm of New Orleans in this historic Creole townhouse fully renovated in 2013, the left half of a raised 1880\'s Camelback Shotgun Double. The cozy Living Room has original hardwood floors, original mantel and huge pocket doors.','Nestled between famous St. Charles and Magazine streets, the location of this townhouse is everything! Experience the real New Orleans in this 1880\'s townhouse, nicknamed Beurre Blanc, half of a "Camelback Shotgun Double".','Garden District','3001 Magazine St',70130,'New Orleans','Louisiana','Moderate',294,'https://a0.muscache.com/im/pictures/7705d0fa-1030-4f59-a5af-5d429482c14c.jpg?aki_policy=xx_large',2);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Belfast Studio in Uptown NOLA','Furnishings maintained and updated annually, with a full kitchen, washer and dryer, Keurig coffee machine, pots/pans, and knives. Grocery is 4 blocks away with a great selection of prepared foods, beer, and wine.','Come stay in the heart of Uptown New Orleans 4 blocks from the Historic Street Car Line. Loaded with local artwork, this year-old listing well appointed, secure, and private; less than 4 miles from the FQ and Downtown NOLA.','Uptown','1039 Broadway',70118,'New Orleans','Louisiana','Strict',51,'https://a0.muscache.com/im/pictures/9811537c-1718-40d8-9710-d0ad864d5269.jpg?aki_policy=xx_large',3);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Ride the Streetcar to the French Quarter!','Private bedroom and bath in our charming shotgun house on the Canal Streetcar line only 2 miles from the French Quarter. Guest area features private entrance, beautiful antique furnishing, comfortable and clean queen bed, and cozy guest robes.','Guest area features private bedroom and bath with its own private entrance. Only 2 miles from the French Quarter by streetcar. Enjoy complete privacy in the guest space or visit with the hosts as you desire.','Midcity','542 S Jefferson Davis Pkwy',70119,'New Orleans','Louisiana','Strict',79,'https://a0.muscache.com/im/pictures/9297014/3790b84d_original.jpg?aki_policy=xx_large',4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Shiro\'s Suite - central & cute!','You will be hard pressed to find anything this size and this close to the heartbeat of the musical, gastronomic and cultural delights of New Orleans at this price point. Just 2 blocks to the French Quarter,  you\'re in the middle of trendy Treme.','Shiro\'s is a wonderfully appointed apartment suite that offers a private space in a wonderful location. A short walk will get you to the French Quarter or Frenchman St. Mornings are very quiet - a perfect place to relax and unwind.','Midcity','100 Iberville',70130,'New Orleans','Louisiana','Moderate',89,'https://a0.muscache.com/im/pictures/14556806/1a769913_original.jpg?aki_policy=xx_large',5);

INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (4,2,2,'Cozy private suite','Bonjour, I speak French and English and I am a Realtor. I can help you relocate. This cozy, private suite is centrally located to all attractions in Pinellas and Hillsborough County.',' Close to Indian Rocks Beach, Clearwater Beach (Winter the dolphin), St Petersburg, Tampa, Bush Gardens','Largo','1800 Keene Rd,', 33771 ,'Tampa','Florida','Cancel up to 7 days before check in and get a 50% refund (minus service fees).',90,'https://a0.muscache.com/im/pictures/40534080/21ac1899_original.jpg?aki_policy=x_large',4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (3,2,1,'Luxury Apartment in Downtown Tampa/Channelside', 'Situated right in the heart of Downtown Tampa, this stay will be more than a regular vacation: it will be a unique living EXPERIENCE like no other.', 'Within this chic, industrial-style community, guests will find an abundance of amenities during their stay: Gated/controlled access entry Tropical, resort-style pool with sun deck, private cabanas, & Jacuzzi Fully equipped gym.', 'Channelside','701 Channelside Dr',33602, 'Tampa', 'Florida','Flexible :Cancel up to 24 hours before check in and get a full refund (minus service fees)', 120, 'https://a0.muscache.com/im/pictures/4a63d880-6483-4be1-ba7f-c14473602eb4.jpg?aki_policy=xx_large', 5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Cottage At The Springs', 'Welcome to the Cottages At The Springs! This cozy private home is your hidden getaway. This historic 1920s bungalow was renovated with a strong European influence along with a bit of a Floridian twist. The home features original hardwood floors.','', 'Sulpur Springs','8412 N 13th St', 33604, 'Tampa', 'Florida', 'Stict', 72, 'https://a0.muscache.com/im/pictures/9d57dba8-161a-475e-beab-7c07f934966d.jpg?aki_policy=xx_large', 3.5);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (2,1,1,'Beautiful Renovated Bungalow in Center of Tampa', 'This home will definitely make you feel you are home away from home. It’s a Fully Renovated 100-year-old Bungalow with all Brand New appliances and KEYLESS entry!','It’s very conveniently located and has everything within arm’s reach. 5min to Raymond James Stadium; 10min to Airport, Downtown, Hyde Park, Riverwalk, Amalie Arena, Bayshore; 20-30min to St Pete, Clearwater.','Marina Club of Tampa','3030 W Doctor M.L.K. Jr Blvd',33607, 'Tampa', 'Florida','Flexible', 135, 'https://a0.muscache.com/im/pictures/a40ac95f-b756-459a-8b91-74daad2c6caf.jpg?aki_policy=xx_large', 4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (3,1, 1, 'Farmhouse Bungalow Minutes from Downtown and Ybor','You\'ll love this 101 year old bungalow that is beautifully decorated with a farmhouse motif. Relax sipping coffee on the wrap around porch with bistro tables and swing.', 'The master bedroom features a bohemian decor with queen bed and hanging hammock chair, great for curling up with a good book. The second bedroom features twin and full sized beds with study desk.', 'Seminole Heights', '350 W Fern St', 33604, 'Tampa', 'FLorida', 'Average', 135, 'https://a0.muscache.com/im/pictures/85e1a79e-e680-43d0-b1c9-130becf164de.jpg?aki_policy=xx_large', 4);
INSERT INTO `listings` (`num_guests`,`bedrooms`,`bathrooms`,`name`,`description`,`summary`,`neighborhood`,`street_address`,`zip_code`,`city`,`state`,`cancellation_policy`,`nightly_price`,`pic_url`,`rating`) VALUES (4,2, 2, 'Bohemian getaway w/ private bath & entrance', 'Spacious bedroom with attached master bath and separate entrance', '', 'Tampa Heights', '315 W Columbus Dr', 33602, 'Tampa', 'Florida', 'Moderate', 123, 'https://a0.muscache.com/im/pictures/f405e3cc-2614-4e7c-bfa8-3fcc5975c8bd.jpg?aki_policy=xx_large', 3);



INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (1, 1, '2013-02-11');
INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (1, 1, '2013-02-12');

INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (3, 1, '2018-04-19');
INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (3, 1, '2018-04-20');
INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (3, 1, '2018-04-21');

INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (5, 1, '2018-05-01');
INSERT INTO `bookings` (`listing_id`, `user_id`, `dateRented`) VALUES (5, 1, '2018-05-02');