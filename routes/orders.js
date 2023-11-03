const express = require("express");
const OrderController = require("../controllers/OrderController")
const router = express.Router();

router.post("/create", OrderController.create);
router.put("/update/:id", OrderController.updateByID);
router.delete("/delete/:id", OrderController.deleteByID);
router.get("/", OrderController.getAll);
router.get("/id/:id", OrderController.getByID);

module.exports = router