INSERT INTO users (email,passwordhash,first_name,last_name,phone_number,s_address,city,state,post_code)
 VALUES ('patelneema93@gmail.com','12345','Neema','Patel',90546967834,'34 brittania ave','oshawa','ontario','L1l0L8'),
  ('patelheeya@gmail.com','12345','Heeya','Patel',90546967848,'36 brittania ave','oshawa','ontario','L1L0L8'),
  ('patelMeet@gmail.com','12345','Meet','Patel',9057894567,'20 brittania ave','oshawa','ontario','L1l0L8'),
  ('Raninder@gmail.com','12345','Raninder','Dhillon',90546967834,'40 wildfeild ave','oshawa','ontario','L1L9H8'),
  ('test2@test.com','12345','Fname1','Lname1',1234567890,'11 ABC1 Cres','Mississauga','ontario','L5x 0P1'),
  ('test3@test.com','12345','Fname2','Lname2',1234567890,'11 ABC2 Cres','Mississauga','ontario','L5x 0P2'),
  ('test4@test.com','12345','Fname3','Lname3',1234567890,'11 ABC3 Cres','Mississauga','ontario','L5x 0P3'),
  ('test5@test.com','12345','Fnam4','Lname4',1234567890,'11 ABC4 Cres','Mississauga','ontario','L5x 0P4'),
  ('test6@test.com','12345','Fname5','Lname5',1234567890,'11 ABC5 Cres','Mississauga','ontario','L5x 0P5'),
  ('test7@test.com','12345','Fname6','Lname6',1234567890,'11 ABC6 Cres','Mississauga','ontario','L5x 0P6'),
  ('test8@test.com','12345','Fname7','Lname7',1234567890,'11 ABC7 Cres','Mississauga','ontario','L5x 0P7'),
  ('test9@test.com','12345','Fname8','Lname8',1234567890,'11 ABC8 Cres','Mississauga','ontario','L5x 0P8'),
  ('test10@test.com','12345','Fname9','Lname9',1234567890,'11 ABC9 Cres','Mississauga','ontario','L5x 0P9');
   
INSERT INTO goods_categories (name)
VALUES ('Books'),
('Ex_Equipment'),
('Furniture'),
('Toys_and_Games'),
('Daily_Living'),
('Mobility_Products'),
('Communication'),
('Others');

INSERT INTO fund_categories (name)
VALUES ('therapy'),
 ('medical'), 
 ('travel'),
  ('equipment'), 
  ('food'),
   ('education');

INSERT INTO goods (user_id,good_cat_id,size,quantity,img,company,condition,description)
VALUES(1,6,'medium',3,'https://st.depositphotos.com/1281871/3004/i/950/depositphotos_30040051-stock-photo-wheelchair.jpg','Rifton','moderate','pediatric wheelchair comes with a standard transit tie down brackets.'),
(1,6,'medium',1,'https://www.adaptivemall.com/media/catalog/product/cache/33fe7abf09c199749a67323a03e86903/s/c/scout_2014_-_cordura_1.jpg',null,'good','chair is old but still nice working'),
(2,3,'small',1,'https://www.adaptivemall.com/media/catalog/product/cache/33fe7abf09c199749a67323a03e86903/s/t/st-liners-size-1-on-chair-cherry.png',null,'good',''),
(3,1,'',3,'https://m.media-amazon.com/images/I/51z6uB2yhDL._SL500_.jpg','Audible','Excellent','book that offers a wonderful message about embracing the things that bring us together as humans'),
(3,2,'small',5,'https://m.media-amazon.com/images/I/61ft6BDoYjL._AC_SX679_.jpg','Audible','Excellent','book that offers a wonderful message about embracing the things that bring us together as humans'),
(3,3,'',3,'https://www.keekaroo.com/media/catalog/product/cache/33fe7abf09c199749a67323a03e86903/c/a/catchup1.jpeg','Tomato','Excellent','book that offers a wonderful message about embracing the things that bring us together as humans'),
(4,2,'',4,'https://m.media-amazon.com/images/I/61La-kPbOQL._AC_UL640_FMwebp_QL65_.jpg','Audible','Good','book that offers a wonderful message about embracing the things that bring us together as humans'),
(4,4,'',3,'https://cadanat.com/wp-content/uploads/2019/03/Ring-Around-Bells-Switch-Adapted-Toy-500x396.png','Cadan Assistive','Excellent','This Ring Around Bells toy awakens a variety of senses. This mesmerizing display provides visual and auditory stimulation to meet multiple needs. Touching the toy also gives tactile stimulation as you make it spin.'),
(5,3,'',5,'https://secure.img1-fg.wfcdn.com/im/02264787/resize-h445%5Ecompr-r85/8678/86782785/Toddler+Tower+Adjustable+Kitchen+Stool.jpg','Wayfair','Excellent','Our 17 month old son always wants to be with me in the kitchen when I am cooking. This gives him the perfect opportunity to be with me and help.'),
(5,4,'',6,'https://cadanat.com/wp-content/uploads/2019/03/Magical-Light-Showwith-Lights-On.png','LoveAt','Excellent','Spinning lights, catchy music and stimulating vibration'),
(1,5,'',2,'https://cdn.shopify.com/s/files/1/0831/7087/products/InfantChild5Pack_400x.jpg?v=1639450256','EazyHold','Excellent','Easier on the hands, easier to wash and fit odd shaped items such as an electric tooth brush, hair brush, pen etc. '),
(6,6,'',7,'https://m.media-amazon.com/images/I/61S93Nx437L._AC_SL1000_.jpg','Goovy','Good','my son is 3 years old but hes as big as a 6 year old and this seat fits him nicely '),
(7,7,'',3,'https://www.flaghouse.ca/productImages/image.axd/i.42421/w.450/h.450/xm.0/Talkable+4_L.jpg','Flag','Excellent','Up to 20 seconds Total Recording Time
Records 4 messages'),
(8,8,'',1,'https://m.media-amazon.com/images/I/51z6uB2yhDL._SL500_.jpg','Audible','Good','book that offers a wonderful message about embracing the things that bring us together as humans'),
(9,8,'',4,'https://www.melissaanddoug.com/dw/image/v2/BBDH_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfd4c7d39/large/001314_1.jpg?sw=562&sh=570&sm=fit','Melissa&Doug','Satisfactory','his colorful upright piano features 25 keys and two full octaves. The littlest musicians will enjoy exploring concepts of high and low notes, loud and soft.'),
(9,8,'',2,'https://www.especialneeds.com/media/catalog/product/cache/1/thumbnail/75x/9df78eab33525d08d6e5fb8d27136e95/b/o/bouncing_square_carpeted_platform_swing_1.jpg','Swingit','Good','Bouncing Platform Swing enhances your therapeutic swing routine with some proprioceptive activity, making this an all-in-one piece of equipment. Connect the swing with a heavy duty rotational device and enjoy all the benefits of rotational therapy with an added "boing" effect.'),
(2,7,'',1,'https://enablingdevices.com/wp-content/uploads/2017/09/7083_2017-300x300.jpg','AAC','Excellent','Specially designed for the visually impaired, this state-of-the-art communicator has 12 levels, scanning capabilities and large brightly illuminated targets that make it possible to see, select and activate messages'),
(3,1,'',8,'https://images-na.ssl-images-amazon.com/images/I/517XAFNcfBL._SX198_BO1,204,203,200_QL40_ML2_.jpg','Audible','Excellent','book that offers a wonderful message about embracing the things that bring us together as humans');


INSERT INTO fundraising (user_id,fund_cate_id,title,img,story,goal)
VALUES(2,5,'Need money for baby','https://images.indianexpress.com/2020/05/autism-759-1.jpg','My son not able do any think by self. please help me.',5000.00),
(3,2,'Need money for baby','http://www.todaysparent.com/wp-content/uploads/2016/05/specialneedssoccor-main.jpg','My kid not able to walk. please help me.',3000.00);

INSERT INTO donation_money(user_id,fund_id,amount,date)
VALUES(4,1,3000.00,now()),
(4,2,1000.00,now());