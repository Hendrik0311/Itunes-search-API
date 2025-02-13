const express = require("express");
const { login } = require("../controllers/authController");

const router = express.Router();

// Authentication endpoint
router.post("/login", login);

module.exports = router;
