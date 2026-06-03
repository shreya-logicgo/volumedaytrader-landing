const express = require("express");
const inquiryController = require("../controllers/inquiry.controller");
const requireAuth = require("../middleware/auth.middleware");
const requireAdmin = require("../middleware/auth.middleware").requireAdmin;

const router = express.Router();

router.post("/", inquiryController.submitInquiry);
router.get("/", requireAuth, requireAdmin, inquiryController.listInquiries);

module.exports = router;
