BEGIN;

--CARDS
INSERT INTO card (title,slug,website,description,url_image,url,user_id,level_id,language_id,type_id,category_id) values
('national','sbwire.com','morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum','http://dummyimage.com/218x100.png/5fa2dd/ffffff','http://1234',2,3,1,1,2),
('6th generation','virginia.edu','luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est','http://dummyimage.com/168x100.png/cc0000/ffffff','http://1235',1,1,2,3,2),
('approach','illinois.edu','sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare','http://dummyimage.com/188x100.png/ff4444/ffffff','http://1236',2,3,1,5,1),
('bottom-line','columbia.edu','ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh','http://dummyimage.com/237x100.png/dddddd/000000','http://1237',2,3,1,4,2),
('multi-state','so-net.ne.jp','curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor','http://dummyimage.com/226x100.png/cc0000/ffffff','http://1238',1,1,2,3,2),
('Intuitive','amazon.co.jp','suscipit nulla elit ac nulla sed vel enim sit amet nunc','http://dummyimage.com/198x100.png/cc0000/ffffff','http://1239',1,1,1,4,2),
('archive','statcounter.com','sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel','http://dummyimage.com/111x100.png/cc0000/ffffff','http://1240',1,3,2,5,3),
('zero administration','joomla.org','nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris','http://dummyimage.com/170x100.png/dddddd/000000','http://1241',1,2,1,4,2),
('explicit','booking.com','sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque','http://dummyimage.com/222x100.png/dddddd/000000','http://1242',1,1,1,2,2),
('customer loyalty','mtv.com','donec posuere metus vitae ipsum aliquam non mauris morbi non lectus','http://dummyimage.com/155x100.png/5fa2dd/ffffff','http://1243',1,3,2,2,2),
('cohesive','rediff.com','amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse','http://dummyimage.com/145x100.png/5fa2dd/ffffff','http://1244',2,3,1,2,1),
('Business-focused','buzzfeed.com','pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum','http://dummyimage.com/239x100.png/5fa2dd/ffffff','http://1245',1,3,2,5,1),
('Focused','canalblog.com','fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in','http://dummyimage.com/182x100.png/ff4444/ffffff','http://1246',1,2,2,1,3),
('client-driven','psu.edu','nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id','http://dummyimage.com/246x100.png/ff4444/ffffff','http://1247',1,3,2,5,2),
('Extended','flavors.me','turpis donec posuere metus vitae ipsum aliquam non mauris morbi non','http://dummyimage.com/130x100.png/cc0000/ffffff','http://1248',1,2,2,5,1),
('time-frame','telegraph.co.uk','ut tellus nulla ut erat id mauris vulputate elementum nullam','http://dummyimage.com/160x100.png/cc0000/ffffff','http://1249',2,2,1,2,3),
('4th generation','phpbb.com','ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis','http://dummyimage.com/190x100.png/dddddd/000000','http://1250',2,1,2,4,3),
('grid-enabled','last.fm','amet eleifend pede libero quis orci nullam molestie nibh in','http://dummyimage.com/171x100.png/dddddd/000000','http://1251',1,3,2,5,2),
('Customizable','wp.com','nulla neque libero convallis eget eleifend luctus ultricies eu nibh','http://dummyimage.com/201x100.png/ff4444/ffffff','http://1252',2,2,2,1,2),
('Extended','boston.com','morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla','http://dummyimage.com/186x100.png/dddddd/000000','http://1253',1,3,1,1,3),
('Focused','shutterfly.com','sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla','http://dummyimage.com/217x100.png/ff4444/ffffff','http://1254',1,2,2,4,3),
('project','marketwatch.com','dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus','http://dummyimage.com/188x100.png/5fa2dd/ffffff','http://1255',2,3,2,4,1),
('support','ted.com','ac lobortis vel dapibus at diam nam tristique tortor eu','http://dummyimage.com/144x100.png/ff4444/ffffff','http://1256',1,3,1,4,3),
('data-warehouse','imgur.com','est phasellus sit amet erat nulla tempus vivamus in felis','http://dummyimage.com/121x100.png/ff4444/ffffff','http://1257',2,2,2,3,1),
('Optimized','wikia.com','imperdiet nullam orci pede venenatis non sodales sed tincidunt eu','http://dummyimage.com/112x100.png/dddddd/000000','http://1258',1,3,2,5,1),
('internet solution','google.com.br','dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio','http://dummyimage.com/238x100.png/dddddd/000000','http://1259',2,1,2,5,2),
('Organized','people.com.cn','risus auctor sed tristique in tempus sit amet sem fusce consequat nulla','http://dummyimage.com/127x100.png/cc0000/ffffff','http://1260',1,3,1,5,1),
('model','bing.com','morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis','http://dummyimage.com/117x100.png/dddddd/000000','http://1261',2,3,2,4,1),
('neural-net','fema.gov','tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor','http://dummyimage.com/142x100.png/cc0000/ffffff','http://1262',2,3,2,5,2),
('capacity','archive.org','amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt','http://dummyimage.com/127x100.png/dddddd/000000','http://1263',1,1,1,1,2),
('Front-line','constantcontact.com','leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac','http://dummyimage.com/243x100.png/ff4444/ffffff','http://1264',2,1,1,5,3),
('encoding','yolasite.com','rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut','http://dummyimage.com/110x100.png/5fa2dd/ffffff','http://1265',1,2,2,4,1),
('systematic','fema.gov','semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat','http://dummyimage.com/152x100.png/ff4444/ffffff','http://1266',1,3,2,5,3),
('Persevering','usgs.gov','lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero','http://dummyimage.com/178x100.png/ff4444/ffffff','http://1267',1,2,1,1,1),
('demand-driven','washington.edu','vel augue vestibulum ante ipsum primis in faucibus orci luctus et','http://dummyimage.com/162x100.png/dddddd/000000','http://1268',2,2,1,5,1),
('incremental','gov.uk','vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat','http://dummyimage.com/173x100.png/ff4444/ffffff','http://1269',1,2,1,4,2),
('zero defect','arstechnica.com','amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus','http://dummyimage.com/230x100.png/dddddd/000000','http://1270',2,2,2,1,3),
('contextually-based','nsw.gov.au','varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere','http://dummyimage.com/239x100.png/cc0000/ffffff','http://1271',2,3,1,2,3),
('internet solution','guardian.co.uk','id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at','http://dummyimage.com/173x100.png/dddddd/000000','http://1272',1,1,2,1,3),
('groupware','npr.org','cras in purus eu magna vulputate luctus cum sociis natoque penatibus','http://dummyimage.com/178x100.png/5fa2dd/ffffff','http://1273',2,2,1,3,2);

--user_prefer_card
insert into user_prefer_card (user_id, card_id) values (2, 31);
insert into user_prefer_card (user_id, card_id) values (2, 39);
insert into user_prefer_card (user_id, card_id) values (2, 4);
insert into user_prefer_card (user_id, card_id) values (2, 11);
insert into user_prefer_card (user_id, card_id) values (1, 9);
insert into user_prefer_card (user_id, card_id) values (2, 36);
insert into user_prefer_card (user_id, card_id) values (1, 39);
insert into user_prefer_card (user_id, card_id) values (2, 20);
insert into user_prefer_card (user_id, card_id) values (1, 37);
insert into user_prefer_card (user_id, card_id) values (2, 14);

--card_has_tech
insert into card_has_tech (card_id, tech_id) values (34, 3);
insert into card_has_tech (card_id, tech_id) values (7, 4);
insert into card_has_tech (card_id, tech_id) values (32, 1);
insert into card_has_tech (card_id, tech_id) values (6, 3);
insert into card_has_tech (card_id, tech_id) values (8, 4);
insert into card_has_tech (card_id, tech_id) values (7, 1);
insert into card_has_tech (card_id, tech_id) values (5, 2);
insert into card_has_tech (card_id, tech_id) values (15, 3);
insert into card_has_tech (card_id, tech_id) values (6, 3);
insert into card_has_tech (card_id, tech_id) values (21, 1);
insert into card_has_tech (card_id, tech_id) values (8, 4);
insert into card_has_tech (card_id, tech_id) values (1, 2);
insert into card_has_tech (card_id, tech_id) values (21, 3);
insert into card_has_tech (card_id, tech_id) values (12, 3);
insert into card_has_tech (card_id, tech_id) values (16, 3);
insert into card_has_tech (card_id, tech_id) values (33, 2);
insert into card_has_tech (card_id, tech_id) values (10, 4);
insert into card_has_tech (card_id, tech_id) values (34, 4);
insert into card_has_tech (card_id, tech_id) values (3, 3);
insert into card_has_tech (card_id, tech_id) values (16, 1);
insert into card_has_tech (card_id, tech_id) values (23, 1);
insert into card_has_tech (card_id, tech_id) values (14, 1);
insert into card_has_tech (card_id, tech_id) values (13, 2);
insert into card_has_tech (card_id, tech_id) values (29, 4);
insert into card_has_tech (card_id, tech_id) values (16, 3);
insert into card_has_tech (card_id, tech_id) values (11, 1);
insert into card_has_tech (card_id, tech_id) values (12, 2);
insert into card_has_tech (card_id, tech_id) values (27, 3);
insert into card_has_tech (card_id, tech_id) values (26, 3);
insert into card_has_tech (card_id, tech_id) values (40, 2);
insert into card_has_tech (card_id, tech_id) values (34, 4);
insert into card_has_tech (card_id, tech_id) values (36, 3);
insert into card_has_tech (card_id, tech_id) values (10, 3);
insert into card_has_tech (card_id, tech_id) values (30, 3);
insert into card_has_tech (card_id, tech_id) values (5, 3);
insert into card_has_tech (card_id, tech_id) values (8, 3);
insert into card_has_tech (card_id, tech_id) values (35, 1);
insert into card_has_tech (card_id, tech_id) values (11, 2);
insert into card_has_tech (card_id, tech_id) values (1, 2);
insert into card_has_tech (card_id, tech_id) values (29, 1);
insert into card_has_tech (card_id, tech_id) values (28, 1);
insert into card_has_tech (card_id, tech_id) values (17, 4);
insert into card_has_tech (card_id, tech_id) values (19, 2);
insert into card_has_tech (card_id, tech_id) values (2, 4);
insert into card_has_tech (card_id, tech_id) values (35, 3);
insert into card_has_tech (card_id, tech_id) values (5, 4);
insert into card_has_tech (card_id, tech_id) values (16, 4);
insert into card_has_tech (card_id, tech_id) values (16, 1);
insert into card_has_tech (card_id, tech_id) values (6, 2);
insert into card_has_tech (card_id, tech_id) values (35, 2);


--card_has_category
insert into card_has_category (card_id, category_id) values (18, 2);
insert into card_has_category (card_id, category_id) values (9, 3);
insert into card_has_category (card_id, category_id) values (11, 1);
insert into card_has_category (card_id, category_id) values (30, 3);
insert into card_has_category (card_id, category_id) values (4, 3);
insert into card_has_category (card_id, category_id) values (30, 1);
insert into card_has_category (card_id, category_id) values (17, 1);
insert into card_has_category (card_id, category_id) values (4, 1);
insert into card_has_category (card_id, category_id) values (17, 1);
insert into card_has_category (card_id, category_id) values (17, 1);
insert into card_has_category (card_id, category_id) values (22, 1);
insert into card_has_category (card_id, category_id) values (17, 1);
insert into card_has_category (card_id, category_id) values (24, 1);
insert into card_has_category (card_id, category_id) values (9, 2);
insert into card_has_category (card_id, category_id) values (26, 2);
insert into card_has_category (card_id, category_id) values (15, 3);
insert into card_has_category (card_id, category_id) values (25, 1);
insert into card_has_category (card_id, category_id) values (22, 2);
insert into card_has_category (card_id, category_id) values (29, 1);
insert into card_has_category (card_id, category_id) values (27, 2);
insert into card_has_category (card_id, category_id) values (21, 3);
insert into card_has_category (card_id, category_id) values (17, 3);
insert into card_has_category (card_id, category_id) values (19, 1);
insert into card_has_category (card_id, category_id) values (11, 1);
insert into card_has_category (card_id, category_id) values (35, 3);
insert into card_has_category (card_id, category_id) values (21, 3);
insert into card_has_category (card_id, category_id) values (15, 1);
insert into card_has_category (card_id, category_id) values (18, 3);
insert into card_has_category (card_id, category_id) values (36, 1);
insert into card_has_category (card_id, category_id) values (25, 3);
insert into card_has_category (card_id, category_id) values (37, 2);
insert into card_has_category (card_id, category_id) values (22, 3);
insert into card_has_category (card_id, category_id) values (30, 2);
insert into card_has_category (card_id, category_id) values (31, 3);
insert into card_has_category (card_id, category_id) values (34, 1);
insert into card_has_category (card_id, category_id) values (21, 3);
insert into card_has_category (card_id, category_id) values (10, 2);
insert into card_has_category (card_id, category_id) values (32, 1);
insert into card_has_category (card_id, category_id) values (38, 3);
insert into card_has_category (card_id, category_id) values (11, 1);

COMMIT;