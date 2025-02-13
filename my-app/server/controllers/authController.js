const jwt = require("jsonwebtoken");

const secretKey = "My_key";

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Function to authenticate user and generate JWT token
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { login };
