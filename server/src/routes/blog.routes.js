const express = require("express");
const blogController = require("../controllers/blog.controller");
const requireAuth = require("../middleware/auth.middleware");
const requireAdmin = require("../middleware/auth.middleware").requireAdmin;
const asyncHandler = require("../utils/asyncHandler");
const { validateBody, validateQuery } = require("../middleware/validate.middleware");
const {
  generateBlogSchema,
  generateImageSchema,
  listBlogsQuerySchema,
} = require("../validation/blog.validation");

const router = express.Router();

// Protect all blog management routes with authentication and admin authorization
router.use(requireAuth, requireAdmin);

// Generate AI blog content
router.post("/generate", validateBody(generateBlogSchema), asyncHandler(blogController.generateContent),);

// Generate AI cover image and upload to Cloudinary
router.post("/generate-image", validateBody(generateImageSchema), asyncHandler(blogController.generateImage),);

// List blogs with pagination, search, and sorting
router.get("/", validateQuery(listBlogsQuerySchema), asyncHandler(blogController.list),);

// Create a new blog (supports cover image upload)
router.post("/", blogController.uploadCoverMiddleware, asyncHandler(blogController.create),);

// Get a single blog by ID or slug
router.get("/:identifier", asyncHandler(blogController.getOne));

// Update an existing blog (supports cover image replacement)
router.patch("/:identifier", blogController.uploadCoverMiddleware, asyncHandler(blogController.update),);

// Delete a blog and associated Cloudinary assets
router.delete("/:identifier", asyncHandler(blogController.remove));

module.exports = router;
