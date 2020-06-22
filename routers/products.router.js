const express = require("express");
const router = express.Router();

//Import controllers
const {
  getProductsController,
  addProductsController,
  editProductsController,
  deleteProductsController,
} = require("../controllers/products.controller");


//Chỉ định router với nhiều method khác nhau
router.get("/:productID", getProductsController);
router.post("/", addProductsController);
router.put("/:productID", editProductsController);
router.delete("/:productID", deleteProductsController);

module.exports = router;
