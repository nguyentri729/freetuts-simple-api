
//Import model vào để tương tác với API

// model API: https://mongoosejs.com/docs/api/model.html
const Product = require("../models/products.model");
const getProductsController = async (req, res) => {


  try {

    //Lấy productID từ params ở URL
    const { productID } = req.params;
    

    //Lấy kết quả tìm được
    const result = await Product.findById(productID);

    res.json(result).status(200);
  } catch (err) {
    res
      .json({ error: 1, msg: "Không tìm thấy thông tin sản phẩm" })
      .status(500);
  }
};

const addProductsController = async (req, res) => {
  try {

    //Lấy data từ body gửi về tử method POST
    const { name, price, number } = req.body;

    //Thêm sản phẩm mới
    const newProduct = await new Product({
      name,
      price,
      number,
    }).save();
    
    res.json(newProduct).status(200);
  } catch (err) {

    //Trả về kết quả nếu lỗi
    res.json({ error: 1, msg: err.message }).status(500);
  }
};

const editProductsController = async (req, res) => {
  try {
    //Như trên...
    const { productID } = req.params;
    const { name, price, number } = req.body;
    const result = await Product.findByIdAndUpdate(
      productID,
      {
        name,
        price,
        number,
      },
      { new: true }
    );

    res.json(result).status(200);
  } catch (err) {
    res.json({ error: 1, msg: "Không thể cập nhật sản phẩm" }).status(500);
  }
};
const deleteProductsController = async (req, res) => {
  try {

    //Như trên...
    const { productID } = req.params;

    const result = await Product.findByIdAndDelete(productID);

    res.json(result).status(200);
  } catch (err) {
    res.json({ error: 1, msg: "Không thể xóa sản phẩm" }).status(500);
  }
};
module.exports = {
  getProductsController,
  addProductsController,
  editProductsController,
  deleteProductsController,
};
