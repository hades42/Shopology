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
const { expect } = require("@jest/globals");

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

describe("Testing user API", () => {
    beforeEach(async () => {
        await sampleData();
    });

    // @desc    Fetch trending products
    // @route   GET /api/products/trending
    // @access  Public (any one can hit this route)
    test("Test logging in using admin account", async () => {
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

                expect(user.name).toBe("Admin User"),
                    expect(user.email).toBe("ahihi@test.com"),
                    expect(user.isAdmin).toBe(true),
                    expect(user.isSeller).toBe(true)
            });
    })

    test("Test signing up an account", async () => {
        const new_account = {
            name: "ahihi name", email: "ahihi4@test.com", password: "Cahihi123456&"
        }
        await api
            .post("/api/user/register")
            .send(new_account)
            .set("Content-Type", "application/json")
            .expect(201)
            .then(async (res) => {
                const user = res.body;
                const { token } = user;

                expect(user.name).toBe("ahihi name"),
                    expect(user.email).toBe("ahihi4@test.com"),
                    expect(user.isAdmin).toBe(false),
                    expect(user.isSeller).toBe(false)
            });
    })

    test("Test signing up fail using an existing email", async () => {
        const new_account = {
            name: "ahihi name", email: "ahihi@test.com", password: "Cahihi123456&"
        }
        await api
            .post("/api/user/register")
            .send(new_account)
            .set("Content-Type", "application/json")
            .expect(400)
            .then((res) => {
                expect(res.body.message).toBe("User already exists");
            });
    });

    test("Test signing up fail using an invalid password", async () => {
        const new_account = {
            name: "ahihi name", email: "ahihi5@test.com", password: "123#"
        }
        await api
            .post("/api/user/register")
            .send(new_account)
            .set("Content-Type", "application/json")
            .expect(400)
            .then((res) => {
                expect(res.body.message).toContain("At least 8 characters—the more characters, the better.");
            });
    });


    afterAll(() => {
        mongoose.disconnect();
    });
});
