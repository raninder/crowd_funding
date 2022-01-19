INSERT INTO users (email,passwordhash,first_name,last_name,phone_number,s_address,city,state,post_code)
 VALUES ('patelneema93@gmail.com','12345','Neema','Patel',90546967834,'34 brittania ave','oshawa','ontario','l1l0l8'),
  ('patelheeya@gmail.com','12345','Heeya','Patel',90546967848,'36 brittania ave','oshawa','ontario','l1l0l8'),
  ('patelMeet@gmail.com','12345','Meet','Patel',9057894567,'20 brittania ave','oshawa','ontario','l1l0l8'),
  ('Raninder@gmail.com','12345','Raninder','Diloh',90546967834,'40 wildfeild ave','oshawa','ontario','l1l9h8');

INSERT INTO goods_categories (name)
VALUES ('books'),
('Exercise Equipment'),
('Furniture'),
('Toys and Games'),
('Daily Living'),
('Socail & Communication');

INSERT INTO fund_categories (name)
VALUES ('therapy'),
 ('medical'), 
 ('travel'),
  ('equipment'), 
  ('food'),
   ('education');

INSERT INTO goods (user_id,good_cate_id,size,quantity,img,company,codition,description)
VALUES(1,4,'medium',3,'https://www.istockphoto.com/photo/mom-and-son-laugh-together-while-playing-in-living-room-gm1165345367-320628958',null,'good','this toy is nice condition.'),
(1,5,'medium',1,'https://www.istockphoto.com/photo/couple-hands-during-sunset-gm1053564580-281489787',null,'ok','chair is old but still nice working'),
(1,4,'small',1,'https://www.istockphoto.com/photo/child-with-down-syndrome-enjoying-with-his-father-at-public-park-gm1185240681-333946796',null,'good','it is perfect for 2 to 9 old kids');

INSERT INTO fundraising (user_id,fund_cate_id,title,img,story,goal)
VALUES(2,5,'Need money for baby','https://images.indianexpress.com/2020/05/autism-759-1.jpg','My son not able do any think by self. please help me.',5000.00),
(3,2,'Need money for baby','http://www.todaysparent.com/wp-content/uploads/2016/05/specialneedssoccor-main.jpg','My kid not able to walk. please help me.',3000.00);

INSERT INTO donation_money(user_id,fund_id,amount,date)
VALUES(4,1,3000.00,now()),
(4,2,1000.00,now());