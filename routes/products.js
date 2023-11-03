const express = require("express");
const ProductController = require("../controllers/ProductController")
const router = express.Router();
const { authentication, isAdmin } = require('../middleware/authentication')


router.post("/create", authentication, isAdmin, ProductController.create);
router.put("/update/:id", authentication, isAdmin, ProductController.updateByID);
router.delete("/delete/:id", authentication, isAdmin, ProductController.deleteByID);
router.get("/", ProductController.getAll);
router.get("/id/:id", ProductController.getByID);
router.get("/name/:productName", ProductController.getByName);
router.get("/price/:productPrice", ProductController.getByPrice);
router.get("/sort/", ProductController.sortByPrice);

module.exports = router;