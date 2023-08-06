create database bikeServiceApp;
use bikeServiceApp;
select * from  customer_login;
drop table customer_login;
create table customer_login(user_id int(6) not null primary key auto_increment,
mail_id varchar(30)  not null ,
phone bigint (14) not null,
status varchar(5) not null,
created_by varchar(20) default null,
created_on datetime default null,
effective_from datetime default null,
effective_to date default null,
modified_by varchar(30) default null,
modified_on datetime default null)auto_increment=10001;


select * from booking_details;
drop table booking_details;
create table booking_details(booking_id int(6) not null primary key auto_increment,
customer_id int(10)  not null ,
services text not null,
service_date date not null,
status varchar(100) not null,
created_by varchar(20) default null,
created_on datetime default null,
effective_from datetime default null,
effective_to date default null,
modified_by varchar(30) default null,
modified_on datetime default null)auto_increment=20001;

