const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "ahihi@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    isSeller: true,
  },

  {
    name: "John Doe",
    email: "ahihi2@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jim Doe",
    email: "ahihi3@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
