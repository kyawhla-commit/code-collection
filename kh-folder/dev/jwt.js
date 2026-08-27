const jwt = require("jsonwebtoken");

const key = "mysecretkey";

const user = {
  id: 1,
  username: "kyawhla",
  email: "kyaw@gmail.com",
};

const token = jwt.sign(user, key, { expiresIn: "1h" });
console.log(token);

const decoded = jwt.verify(token, key);
console.log(decoded);