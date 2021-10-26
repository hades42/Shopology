![Logo](./client/src/media/logo.svg)

![Statements](https://img.shields.io/badge/statements-43.64%25-red.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-14.09%25-red.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-28%25-red.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-44.2%25-red.svg?style=flat)

> eCommerce platform built with MERN stack (MongoDB, ExpressJS, ReactJS, Nodejs)

This is project for COMP3120.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies--frontend---backend-)
  - [Run](#run)
  - [Seed Database](#seed-database)
- [License](#license)

## Features

- Full featured shopping cart
- Product reviews and rating
- Top products carousel
- Instant search for any product with Algolia search engine
- User profile with orders
- Admin products, orders, users management
- Checkout process
- PayPal/ credit cart integration

## Usage

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 3001
MONGO_URL = your mongodb uri
JWT_SECRET = set your secret key for JWT token
PAYPAL_CLIENT_ID = your paypal client id
ALGOLIA_APP_ID = your algolia application API
ALGOLIA_API_KEY = your algolia admin api
```

Create a .env file in the **client/** folder

```
SKIP_PREFLIGHT_CHECK=true
```

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000) & backend (:3001)
npm run dev

# Run backend only (with nodemon)
npm run server

# Run backend only (without nodemon)
npm run server

# Run frontend only
npm run client

# Test
npm run test
```

**Note**: for seeding the data, you should destroy data first then import them.

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

**Sample User logins**

```
ahihi@test.com (Admin)
123456

ahihi2@test.com (Customer)
123456

ahihi3@test.com (Customer)
123456
```

## License

MIT License

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
