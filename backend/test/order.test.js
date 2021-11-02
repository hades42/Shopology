/**
 * @jest-environment node
 */
 const mongoose = require("mongoose");
 const supertest = require("supertest");
 const app = require("../app");
 const api = supertest(app);
 const Product = require("../model/productModel");
 const User = require("../model/userModel");
 const Order = require("../model/orderModel")
 const users = require("../data/users");
 const products = require("../data/products");
 
 const sampleData = async () => {
   await Product.deleteMany();
   await User.deleteMany();
 
   const createdUsers = await User.insertMany(users);
   const sellerUser = createdUsers[0]._id;
 
   const sampleProducts = products.map((product) => {
     return { ...product, user: sellerUser };
   });
 
   await Product.insertMany(sampleProducts);
 };
 
 describe("Testing Order API", () => {
   beforeEach(async () => {
     await sampleData();
   });
   
   // @desc    get order
   // @route   GET /api/order/myorder
   // @access  Customer user
   test("Create new order", async () => {
     const auth = {
       email: "ahihi3@test.com",
       password: "123456",
     };
 
     await api
       .post("/api/user/login")
       .send(auth)
       .set("Content-Type", "application/json")
       .expect(200)
       .then(async (res) => {
         const user = res.body;
         const { token } = user;

         await api
           .get(`/api/order/myorder`)
           .set({
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           })
           .then((res) => {
             expect(res.body).toStrictEqual([])
           }).catch(error => console.log(error));
       });
   });
 
   // @desc    Create new order
   // @route   POST /api/order/
   // @access  Customer user
   test("Create new order", async () => {
     const auth = {
       email: "ahihi3@test.com",
       password: "123456",
     };

     const products = (await api.get("/api/products/top")).body

     await api
       .post("/api/user/login")
       .send(auth)
       .set("Content-Type", "application/json")
       .expect(200)
       .then(async (res) => {
         const user = res.body;
         const { token } = user;

         const newOrder = {
            user: user._id,
            orderItems:[{name:products[0].name,qty:1,image:products[0].image,price:products[0].price, product:products[0]._id}],
            shippingAddress:{fullname:"Van Nguyen Nguyen",phone:"234234",address:"fghfgh",city:"fghfghfgh",postalCode:"2204",state:"New South Wales"},
            paymentMethod:"PalPal",
            taxPrice: "7.5",
            shippingPrice: "30",
            totalPrice: 50,            
         };

         await api
           .post(`/api/order/`)
           .send(newOrder)
           .set({
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           })
           .then((res) => {
            for (const key of Object.entries(newOrder)) {
               expect(res.body[key[0]].toString()).toEqual(
                 newOrder[key[0]].toString()
               );
             }
           }).catch(error => console.log(error));
       });
   });
 
   // @desc     Get order
   // @route   GET /api/order/:id
   // @access  Customer user
   test("Get order", async () => {
     const auth = {
       email: "ahihi3@test.com",
       password: "123456",
     };

     const products = (await api.get("/api/products/top")).body

     await api
       .post("/api/user/login")
       .send(auth)
       .set("Content-Type", "application/json")
       .expect(200)
       .then(async (res) => {
         const user = res.body;
         const { token } = user;

         const newOrder = {
            user: user._id,
            orderItems:[{name:products[0].name,qty:1,image:products[0].image,price:products[0].price, product:products[0]._id}],
            shippingAddress:{fullname:"Van Nguyen Nguyen",phone:"234234",address:"fghfgh",city:"fghfghfgh",postalCode:"2204",state:"New South Wales"},
            paymentMethod:"PalPal",
            taxPrice: "7.5",
            shippingPrice: "30",
            totalPrice: 50,            
         };

         await api
           .post(`/api/order/`)
           .send(newOrder)
           .set({
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           })
           .then(async (res) => {
                const orderId = String(res.body._id)

                await api
                    .get(`/api/order/${orderId}`)
                    .set({
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    })
                    .then(async (res) => {
                        const order = res.body;
                        expect(String(order._id)).toEqual(String(orderId))
                    })
                })
            });
   });

   // @desc    Update order
   // @route   POST /api/order/
   // @access  Customer user
   test("Update order", async () => {
     const auth = {
       email: "ahihi3@test.com",
       password: "123456",
     };

     const products = (await api.get("/api/products/top")).body

     await api
       .post("/api/user/login")
       .send(auth)
       .set("Content-Type", "application/json")
       .expect(200)
       .then(async (res) => {
         const user = res.body;
         const { token } = user;

         const newOrder = {
            user: user._id,
            orderItems:[{name:products[0].name,qty:1,image:products[0].image,price:products[0].price, product:products[0]._id}],
            shippingAddress:{fullname:"Van Nguyen Nguyen",phone:"234234",address:"fghfgh",city:"fghfghfgh",postalCode:"2204",state:"New South Wales"},
            paymentMethod:"PalPal",
            taxPrice: "7.5",
            shippingPrice: "30",
            totalPrice: 50,            
         };

         await api
           .post(`/api/order/`)
           .send(newOrder)
           .set({
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           })
           .then(async (res) => {
                const orderId = String(res.body._id)

                const payment = {
                    id : String(Math.floor(Math.random()*1000)),
                    status : "COMPLETED",
                    update_time : Date.now(),
                    payer : {email_address : "sb-sof6f8149466@personal.example.com"}
                }

                await api
                    .put(`/api/order/${orderId}/pay`)
                    .send(payment)
                    .set({
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    })
                    .then(async (res) => {
                        const order = res.body;
                        console.log(order)
                        expect(order.hasOwnProperty("_id")).toBe(true);
                        expect(order.hasOwnProperty("orderItems")).toBe(true);
                        expect(order.hasOwnProperty("isPaid")).toBe(true);
                        expect(order.isPaid).toBe(true);
                    })
                })
            });
   });

   afterAll(() => {
     mongoose.disconnect();
   });
 });