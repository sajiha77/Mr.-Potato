const mongoose = require("mongoose");

const metaBetContactSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MetabetContact", metaBetContactSchema);
