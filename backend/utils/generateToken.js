const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  if (process.env.NODE_ENV === "test") {
    return jwt.sign({ id }, "testing", {
      expiresIn: "30d",
    });
  } else {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  }
};

module.exports = generateToken;
