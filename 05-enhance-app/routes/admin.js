const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddproduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);

router.get("/edit-product", adminController.editProduct);

router.get("/delete-product", adminController.deleteProduct);

module.exports = router;
