## Description

Module for Customers to calculate APY.

## Built with : -
- Typescript 
- In memory caching mechanism applied on the [GET CUSTOMERS]() route
- Nodejs
- Nest framework - [https://nestjs.com](https://nestjs.com/)

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

# production mode
$ npm run start:prod
```

## API Usage

```bash
# 1. Calculate APY for customerId
$ http://localhost:3050/apy 
 - Pass the payload
{
    "customer_id": "12",
    "deposit": 100,
    "interest_rate": 0.05,
    "yearly_compound_times": 12
}

# 2. Retrieve APY calculation history for customer ID
$ npm run test:e2e
http://localhost:3050/apy/12

# 3. Delete all entries for customer ID
$ http://localhost:3050/apy/12
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
