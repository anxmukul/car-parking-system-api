# Car Parking System (Server Side Application)

## Description
Implementing RESTful APIs for a car parking system.

## Prerequisite
- Nodejs v16.18.1

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev


```

## Test

```bash
# unit tests
$ npm run test


# test coverage
$ npm run test:cov
```

## Avaiable api paths
```http
POST /parking_lot HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 22

{
    "no_of_slot":6
}
```
```http
PATCH /parking_lot HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 22

{
    "no_of_slot":5
}
```
```http
POST /park HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 61

{
   "car_reg_no":"BR-43-SW-1234",
    "car_color":"purple"
}
```
```http
GET /registration_numbers/purple HTTP/1.1
Host: localhost:3000
```
```http
GET /slot_numbers/purple HTTP/1.1
Host: localhost:3000
```
```http
POST /clear HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 45

{
    "car_registration_no":"WB-77-KT-9001"
}
```

```http
GET /status HTTP/1.1
Host: localhost:3000
```

