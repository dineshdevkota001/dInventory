# Address

create table address(
id serial primary key,
tole varchar(100),
ward_no INT not null default 6,
city varchar(50) not null default 'Bharatpur',
district varchar(50) not null default 'Chitwan',
country varchar(50) not null default 'Nepal',
lat INT,
lng INT,
created_on date not null default CURRENT_DATE
);

# Profile

create table profile(
id serial primary key not null,
balance numeric(2) default 0 not null,
name varchar(100) not null,
institution varchar(200),
phone varchar(15),
email varchar(50),
description varchar(255),
bankaccount varchar(30),
address_id INT,
constraint fk_address foreign key(address_id) references address(id)
);

# type

create table item_type(
id serial primary key,
name varchar(255) not null,
image varchar(255),
description varchar(255),
type varchar(30)
);

# inventory

create table inventory(
id serial primary key,
name varchar(30) not null,
address_id int not null,
location_detail varchar(255),
image varchar(255),
constraint fk_address foreign key(address_id) references address(id)
);

# item

create table item(
id serial primary key,
price numeric(2) default 0 not null,
bought_date date default current_date,
expiry_date date,
stock int default 0,
item_type_id int,
inventory_id int,
constraint fk_item foreign key(item_type_id) references item_type(id),
constraint fk_inventory foreign key(inventory_id) references inventory(id)
);

# transaction

create table transaction(
id serial primary key,
created_date date not null default current_date,
total_amount numeric(2) not null default 0,
paid_amount numeric(2) not null default 0,
profile_id int not null,
inventory_id int,
discount numeric(2),
tax numeric(2),
remarks varchar(255),
channel varchar(20) not null default 'cash',
type varchar(20) not null default 'sale',
print_count int not null default 0,
last_print_date date not null default current_date,
constraint fk_inventory foreign key(inventory_id) references inventory(id),
constraint fk_profile foreign key(profile_id) references profile(id)
);

## transaction item join table

create table transaction_item(
transaction_id int,
item_id int,
count int,
constraint fk_transaction foreign key(transaction_id) references transaction(id),
constraint fk_item foreign key(item_id) references item(id)
)
