const express = require('express');
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();
const { authentication } = require('../middleware/authentication');

router.post('/:productId', authentication, ReviewController.create);
router.get('/product/:productId', ReviewController.getProductReviews);
router.put('/:id', ReviewController.update);
router.delete('/:id', ReviewController.delete);

module.exports = router;