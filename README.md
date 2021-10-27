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
- [Project Layout](#project-layout)
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

## Project Layout

### Front-end layout

```
src/                        Root directory of react app
├── App.js                  Layout of the whole application
├── App.test.js             Testing for the application
├── actions/                Store the action of global store(Redux)
├── components/             Store all the re-usable components
├── constants/              Store the constants for all the reducers(Redux)
├── index.css               Apply global styling
├── index.js                Main entry point for the application
├── media/                  Store logo
├── reducers/               Reducers for global state(Redux)
├── screens/                Multiple screens for each main link in (react-router)
│   ├── Auth/               Authentication screen (login, register,etc)
│   ├── CartScreen/         Cart page
│   ├── HomeScreen/         Home page
│   ├── OrderScreen/        Order page
│   ├── PaymentScreen/      Payment page
│   ├── PlaceOrderScreen/   PlaceOrder page
│   ├── ProductScreen/      Product page
│   ├── Profile/            Profile page
│   │   ├── Admin/          Admin Screen page
│   │   └── User/           User Screen page
│   └── Shipping/
├── setupTests.js/          Set up test for frontend
└── store.js                Main store for global state(Redux)
```

### Back-end layout

```
backend/
├── app.js                      Main entry for REST API of the application
├── config/                     Config folder (currently, only setup for database)
├── controller/                 Main logic of the API
├── data/                       Testing data
├── middlewares/                Middlewares
│   ├── authMiddleware.js           Middlewares for checking token
│   └── errorHandlers.js            Middlewares for handling any errors
├── model/                      Model data for mongodb
├── routes/                     All the main routes of the API
├── seeder.js                   Script for auto import and destroy the data (testing purpose only)
├── server.js                   Run the server
├── test/                       All the tests for API
├── uploads/                    Static folder contains all the image
└── utils/                      Contain all re-usable functions
    └── generateToken.js            Currently, only having function for generate JWT tokens

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
