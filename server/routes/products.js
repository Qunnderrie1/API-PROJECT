const express = require("express");
const product = require("../../db/product_query.js");
const errorHandler = require("../errorHandle.js");

const router = express.Router();


// Retrive Products

router.get("/:id?", async (req, res, next) => {
  const { id } = req.params;
  let productData;

  try {
    if (id) {
      productData = await product.getOne(id);
      if (productData.length == 0) {
        res.status(404).json({ error: "Product Not Found!" });
      }
    } else {
      productData = await product.getAll();
    }
  } catch (err) {
    next(err);
  }
  return res.json(productData);
});

// Add Products
router.post("/", async (req, res, next) => {
  const productDetails = req.body;
  let productData;

  try {
    let { insertOne } = await product.createOne(productDetails);
    res.json({ msg: "You have added a product." });
  } catch (error) {
    next(err);
  }
});


// Update Products
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const productDetails = req.body;
  let productData;

  try {
    productData = await product.updateOne(productDetails, id);
  } catch (err) {
    next(err);
  }
  return res.json(productData)
});
// Delete Products
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  let productData;

  try {
    productData = await product.deleteOne(id);
    res.json({ msg: `Product with ID ${id} has been deleted.` });
  } catch (error) {
    next(err);
  }

  return res.json(productData)
});


// Custom Error Handler
router.use(errorHandler);

module.exports = router;
