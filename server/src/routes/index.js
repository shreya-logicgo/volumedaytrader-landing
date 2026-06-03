const express = require("express");
const healthRoutes = require("./health.routes");
const authRoutes = require("./auth.routes");
const inquiryRoutes = require("./inquiry.routes");

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/inquiries", inquiryRoutes);

module.exports = router;
