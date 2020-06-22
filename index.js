// Express
const express = require("express");
const app = express();

//Body parser dùng để parse form
const bodyParser = require("body-parser");

// Mongoose
const mongoose = require("mongoose");

// Import router
const productsRouter = require("./routers/products.router");

// Sử dụng biến môi trường
require("dotenv").config();
const port = process.env.PORT || 3000; // giá trị của port

// Thêm middleware của body-parse
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Thêm route
app.use("/products", productsRouter);

//Kết nối mongooose
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(port, () => {
      console.log("server listing in port ", port);
    });
  }
);
