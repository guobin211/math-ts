#!/usr/bin/env bash
### mysql root

mysql -u root -p

### default port http://127.0.0.1:3306

### default database mysql

### create database for yourself

### DATABASE_NAME AND PASSWORD change to yourself name and password

#> CREATE DATABASE DATABASE_NAME;
#
#> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON DATABASE_NAME.* TO DATABASE_NAME@localhost IDENTIFIED BY 'PASSWORD';
#
#> SET PASSWORD FOR 'DATABASE_NAME'@'localhost' = OLD_PASSWORD('PASSWORD');