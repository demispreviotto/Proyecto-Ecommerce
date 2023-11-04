const { Review, User } = require("../models/index");

const ReviewController = {
    async create(req, res) {
        const { review } = req.body;
        const UserId = req.user.id;
        const ProductId = req.params.productId;
        if (!UserId) return res.status(400).send({ msg: 'Primero debe registrarse como usuario' })
        if (!review) return res.status(400).send({ msg: "Por favor, complete todos los campos obligatorios." });
        try {
            const newReview = await Review.create({
                review,
                UserId,
                ProductId
            });

            res.status(201).send({ msg: 'Resena creada con exito', newReview });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err });
        }
    },
    async getProductReviews(req, res) {
        try {
            const productId = req.params.productId;

            const reviews = await Review.findAll({
                where: { ProductId: productId },
                include: {
                    model: User,
                    attribures: ['id', 'name', 'email'],
                },
            });
            res.status(200).send(reviews)
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err });
        }
    }
}
module.exports = ReviewController;