const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("contact", contactSchema);
