const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController")
const { authentication, isAdmin } = require('../middleware/authentication')

router.post("/create", UserController.create);
router.put("/update", authentication, UserController.updateByID);
router.delete("/delete/:id", authentication, isAdmin, UserController.deleteByID);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get('/orders', authentication, UserController.userOrders);
router.get('/confirm/:emailToken', UserController.confirm)

module.exports = router;