const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  destination: String,
  budget: String,
  message: String,
  packageTitle: String,
  packagePrice: String,
  newsletterConsent: Boolean,
  timestamp: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", LeadSchema);
