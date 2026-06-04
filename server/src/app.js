const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
    credentials: true,
  })
);

app.use(express.json());

// All API routes under /api
app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

module.exports = app;
