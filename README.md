![Logo](./client/src/media/logo.svg)

![Statements](https://img.shields.io/badge/statements-43.64%25-red.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-14.09%25-red.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-28%25-red.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-44.2%25-red.svg?style=flat)

> eCommerce platform built with MERN stack (MongoDB, ExpressJS, ReactJS, Nodejs)


## Table of Contents


- [Table of Contents](#table-of-contents)
- [Demo videos](#demo-videos)
- [Purpose](#purpose)
- [Project URL:](#project-url)
- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
  - [Seed Database](#seed-database)
- [Project Layout](#project-layout)
  - [Front-end layout](#front-end-layout)
  - [Back-end layout](#back-end-layout)
- [Testing](#testing)
- [Future implementations](#future-implementations)
- [Roles](#roles)
- [Deployment](#deployment)
- [License](#license)

## Demo videos
- [Part 1](https://user-images.githubusercontent.com/53460339/140501784-83cb14e9-0ecf-48fa-b1be-781cdf9ec593.mp4)
- [Part 2](https://user-images.githubusercontent.com/53460339/140501930-a563c18e-6a97-41ad-83fd-65b9893acc79.mp4)
- [Part 3](https://user-images.githubusercontent.com/53460339/140644284-bb325354-6b49-4418-b0f3-04a2391b65de.mp4)
## Purpose
The purpose of the application is to provide an e-commerce platform for consumers and vendors to buy & sell products. It takes inspiration on modern applications like eBay or Amazon. Data sources are self-generated, but they conform to some schema from Amazon products datasets [[1](https://data.world/promptcloud/fashion-products-on-amazon-com.)], [[2](https://data.world/promptcloud/amazon-product-listing)], [[3](https://jmcauley.ucsd.edu/data/amazon/)].





## Project URL:
https://comp3120-shopology.herokuapp.com
## Features

- Full featured shopping cart
- Product reviews and rating
- Top products carousel
- Instant search for any product with Algolia search engine
- User profile with orders
- Seller profiles with products
- Admin products, orders, users management
- Checkout process
- PayPal/ credit cart integration
- User/Seller account elevation

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

## Testing

```
npm run test
```

After running the script, you will get a **coverage** folder that contains details about all the test case as well as the percentage of coverage for the API.  
You can open the file _coverage/lcov-report/index.html_ to have better visualization.


## Future implementations
1. Recommendation system for shoppers
2. Social login using third-party vendors like Google, Facebook


## Roles
1. Van Nguyen Nguyen - front end developer
2. Sujith Bellam - front end developer
3. Sepehr Torfeh Nejad - back end developer
4. Canh Thanh Nguyen - back end developer
5. Communications and collaboration:\
   i. The team had weekly meetings to discuss features to implement, and go over presentation for sprints\
   ii. Pull requests are reviewed by at least 1 other team member. Merge conflicts are promptly resolved.
## Deployment
- [Deployment document](https://github.com/MQCOMP3120-2021/group-web-project-group-a/blob/development/DEPLOYMENT.md)

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
