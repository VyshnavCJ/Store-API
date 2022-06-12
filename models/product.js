const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  featured: {
    default: false,
    type: Boolean,
  },
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUES} is not supported ",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
});

module.exports = mongoose.model("Product", productSchema);
