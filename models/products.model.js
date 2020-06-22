const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Khởi tạo Schema
// Schema docs: https://freetuts.net/schemas-trong-mongoose-2308.html
const productSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 0,
      maxlength: 100,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    number: {
      type: Number,
      min: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export schema
module.exports = mongoose.model("Product", productSchema);
