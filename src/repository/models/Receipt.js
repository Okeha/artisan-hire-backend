const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  artisanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artisans",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  totalPrice: { type: Number, required: true },
});

const Receipt = mongoose.model("receipt", receiptSchema);

module.exports = {
  receiptSchema,
  Receipt,
};
