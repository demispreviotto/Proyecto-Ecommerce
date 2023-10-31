const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController")
const { authentication } = require('../middleware/authentication')

router.post("/create", UserController.create);
router.put("/update/:id", authentication, UserController.updateByID);
router.delete("/delete/:id", authentication, UserController.deleteByID);
router.post("/login", UserController.login);

module.exports = router;