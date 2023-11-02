const express = require("express");
const ProductController = require("../controllers/ProductController")
const router = express.Router();

router.post("/create", ProductController.create);
router.put("/update/:id", ProductController.updateByID);
router.delete("/delete/:id", ProductController.deleteByID);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getByID);
router.get("/name/:productName", ProductController.getByName);
router.get("/price/:productPrice", ProductController.getByPrice);
router.get("/order/", ProductController.sortByPrice);

module.exports = router;