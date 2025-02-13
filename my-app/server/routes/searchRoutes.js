const express = require("express");
const { search } = require("../controllers/searchController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Search endpoint (protected with auth middleware)
router.get("/search", verifyToken, search);

module.exports = router;
