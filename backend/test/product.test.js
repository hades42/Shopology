/**
 * @jest-environment node
 */
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const productApi = supertest(app);
const Product = require("../model/productModel");
const User = require("../model/userModel");
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

describe("Testing product API", () => {
  beforeAll(async () => {
    await sampleData();
  });

  test("Test fetch trending products", async () => {
    await productApi
      .get("/api/products/trending")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body).toHaveLength(8);
      });
  });

  test("Test top products", async () => {
    await productApi
      .get("/api/products/top")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body).toHaveLength(4);
      });
  });

  afterAll(() => {
    mongoose.disconnect();
  });
});
