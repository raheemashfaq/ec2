const express = require("express");

const app = express();
const PORT = 30000;

// Middleware
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Example API Route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the API!",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});