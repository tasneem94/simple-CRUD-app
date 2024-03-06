const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getSingleProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getSingleProducts);

router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/", deleteProducts);

module.exports = router;
