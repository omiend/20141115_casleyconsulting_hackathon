# --- !Ups

create table commodity (
  id    bigint auto_increment not null PRIMARY KEY,
  name  varchar(255) not null,
  price int)

# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table commodity;

SET FOREIGN_KEY_CHECKS=1;

