/**
 * EXAMPLE Model (M in MVC) — rename/copy when you add a real feature.
 * Delete this file later if you do not need it.
 */
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Collection in MongoDB will be "contacts" (plural, lowercase)
module.exports = mongoose.model("Contact", contactSchema);
