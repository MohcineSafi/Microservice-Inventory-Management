// models/Order.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
