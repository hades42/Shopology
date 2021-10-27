/**
 * @jest-environment node
 */
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
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
  beforeEach(async () => {
    await sampleData();
  });

  // @desc    Fetch trending products
  // @route   GET /api/products/trending
  // @access  Public (any one can hit this route)
  test("Test fetch trending products", async () => {
    await api
      .get("/api/products/trending")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body).toHaveLength(8);
      });
  });

  test("Test fetch trending products fail", async () => {
    await Product.deleteMany();
    await api
      .get("/api/products/trending")
      .expect(404)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body.message).toBe("Products not found");
      });
  });

  // @desc    Fetch top seller products
  // @route   GET /api/products/top
  // @access  Public (any one can hit this route)
  test("Test top products", async () => {
    await api
      .get("/api/products/top")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body).toHaveLength(4);
      });
  });

  test("Test top products fail", async () => {
    await Product.deleteMany();
    await api
      .get("/api/products/top")
      .expect(404)
      .expect("Content-Type", /application\/json/)
      .then((res) => {
        expect(res.body.message).toBe("Products not found");
      });
  });

  // @desc    Fetch product by ID
  // @route   GET /api/products/:id
  // @access  Public (any one can hit this route)

  test("Get product by ID", async () => {
    await api.get("/api/products/top").then(async (res) => {
      const product = res.body[0];
      await api.get(`/api/products/${product._id}`).then((res) => {
        const testProduct = res.body;
        expect(testProduct.hasOwnProperty("_id")).toBe(true);
        expect(testProduct.hasOwnProperty("name")).toBe(true);
        expect(testProduct.hasOwnProperty("image")).toBe(true);
        expect(testProduct.hasOwnProperty("brand")).toBe(true);
        expect(testProduct.hasOwnProperty("category")).toBe(true);
        expect(testProduct.hasOwnProperty("description")).toBe(true);
        expect(testProduct.hasOwnProperty("rating")).toBe(true);
        expect(testProduct.hasOwnProperty("reviews")).toBe(true);
      });
    });
  });

  test("Get product by ID fail", async () => {
    await api.get(`/api/products/12`).expect(500);
    await api
      .get(`/api/products/61888cd5b66318d9cb9902f9`)
      .expect(404)
      .then((res) => {
        expect(res.body.message).toBe("Product not found");
      });
  });

  // @desc    Create new review
  // @route   POST /api/products/:id/review
  // @access  Private
  test("Create review for product", async () => {
    // Login as admin
    const auth = {
      email: "ahihi@test.com",
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
          .get("/api/products/top")
          .expect(200)
          .then(async (res) => {
            const product = res.body[0];
            const review = {
              rating: 3.5,
              comment: "Testing comment",
            };

            await api
              .post(`/api/products/${product._id}/reviews`)
              .send(review)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(201)
              .then((res) => {
                expect(res.body.message).toBe("Review added");
              });

            await api
              .post(`/api/products/${product._id}/reviews`)
              .send(review)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(400)
              .then((res) => {
                expect(res.body.message).toBe("Product already reviewed");
              });

            await api
              .post(`/api/products/61888cd5b66318d9cb9902f9/reviews`)
              .send(review)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(404)
              .then((res) => {
                expect(res.body.message).toBe("Product not found");
              });
          });
      });
  });

  // @desc    Update a product
  // @route   PUT /api/products/:id
  // @access  Private/Admin
  test("Update a product", async () => {
    // Login as admin
    const auth = {
      email: "ahihi@test.com",
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
          .get("/api/products/top")
          .expect(200)
          .then(async (res) => {
            const product = res.body[0];
            const newUpdate = {
              name: "Ahihi",
              price: "1234",
              description: "Ahihi",
              image: "ahihi",
              brand: "ahihi",
              category: "ahihi",
              countInStock: "999",
            };
            await api
              .put(`/api/products/${product._id}`)
              .send(newUpdate)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(200)
              .then((res) => {
                for (const key of Object.entries(newUpdate)) {
                  expect(newUpdate[key[0]].toString()).toBe(
                    res.body[key[0]].toString()
                  );
                }
              });

            await api
              .put(`/api/products/61888cd5b66318d9cb9902f9`)
              .send(newUpdate)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(404)
              .then((res) => {
                expect(res.body.message).toBe("Product not found");
              });
          });
      });
  });

  // @desc    Delete a product
  // @route   DELETE /api/products/:id
  // @access  Prive/admin
  test("Delete a product", async () => {
    const auth = {
      email: "ahihi@test.com",
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
          .get("/api/products/top")
          .expect(200)
          .then(async (res) => {
            const product = res.body[0];

            await api
              .delete(`/api/products/${product._id}`)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(200)
              .then((res) => {
                expect(res.body.message).toBe("Product Remove!");
              });

            await api
              .delete(`/api/products/61888cd5b66318d9cb9902f9`)
              .set({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              })
              .expect(404)
              .then((res) => {
                expect(res.body.message).toBe("Product not found");
              });
          });
      });
  });

  // @desc    Create a product
  // @route   POST /api/products/:id
  // @access  Private/Admin
  test("Create a product", async () => {
    const auth = {
      email: "ahihi@test.com",
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
        const newProduct = {
          name: "Ahihi",
          price: "1234",
          description: "Ahihi",
          image: "ahihi",
          brand: "ahihi",
          category: "ahihi",
          countInStock: "999",
        };
        await api
          .post(`/api/products/`)
          .send(newProduct)
          .set({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          })
          .then((res) => {
            for (const key of Object.entries(newProduct)) {
              expect(res.body[key[0]].toString()).toEqual(
                newProduct[key[0]].toString()
              );
            }
          });
      });
  });

  afterAll(() => {
    mongoose.disconnect();
  });
});
