const express = require("express");
const CategoryController = require("../controllers/CategoryController")
const router = express.Router();

router.post("/create", CategoryController.create);
router.put("/update/:id", CategoryController.updateByID);
router.delete("/delete/:id", CategoryController.deleteByID);
// router.get("/id/:id", CategoryController.getByID);
// router.get("/name/:categoryName", CategoryController.getByName);

module.exports = router;