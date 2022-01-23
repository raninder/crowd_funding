INSERT INTO users (email,passwordhash,first_name,last_name,phone_number,s_address,city,state,post_code)
 VALUES ('patelneema93@gmail.com','12345','Neema','Patel',90546967834,'34 brittania ave','oshawa','ontario','l1l0l8'),
  ('patelheeya@gmail.com','12345','Heeya','Patel',90546967848,'36 brittania ave','oshawa','ontario','l1l0l8'),
  ('patelMeet@gmail.com','12345','Meet','Patel',9057894567,'20 brittania ave','oshawa','ontario','l1l0l8'),
  ('Raninder@gmail.com','12345','Raninder','Diloh',90546967834,'40 wildfeild ave','oshawa','ontario','l1l9h8');

INSERT INTO goods_categories (name)
VALUES ('Books'),
('Ex_Equipment'),
('Toys_and_Games'),
('Daily_Living'),
('Mobility_Products'),
('Communication'),
('Others');

INSERT INTO goods (user_id,good_cat_id,size,quantity,img,company,condition,description)
VALUES(1,6,'medium',3,'https://st.depositphotos.com/1281871/3004/i/950/depositphotos_30040051-stock-photo-wheelchair.jpg','Rifton','moderate','pediatric wheelchair comes with a standard transit tie down brackets.'),
(1,6,'medium',1,'https://www.adaptivemall.com/media/catalog/product/cache/33fe7abf09c199749a67323a03e86903/s/c/scout_2014_-_cordura_1.jpg',null,'good','chair is old but still nice working'),
(2,3,'small',1,'https://www.adaptivemall.com/media/catalog/product/cache/33fe7abf09c199749a67323a03e86903/s/t/st-liners-size-1-on-chair-cherry.png',null,'good','it is perfect for 2 to 9 old kids'),
(3,1,'',3,'https://m.media-amazon.com/images/I/51z6uB2yhDL._SL500_.jpg','Audible','Excellent','book that offers a wonderful message about embracing the things that bring us together as humans');



INSERT INTO fund_categories (name)
VALUES ('therapy'),
 ('medical'), 
 ('travel'),
  ('equipment'), 
  ('food'),
   ('education');

INSERT INTO fundraising (user_id,fund_cat_id,title,img,story,goal)
VALUES(2,5,'Need money for baby','https://images.indianexpress.com/2020/05/autism-759-1.jpg','My son not able do any think by self. please help me.',5000.00),
(3,2,'Need money for baby','http://www.todaysparent.com/wp-content/uploads/2016/05/specialneedssoccor-main.jpg','My kid not able to walk. please help me.',3000.00);

INSERT INTO donation_money(user_id,fund_id,amount,date)
VALUES(4,1,3000.00,now()),
(4,2,1000.00,now());