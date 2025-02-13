const express = require("express");
const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
