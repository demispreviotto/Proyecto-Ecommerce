const { Review, User, Product, Category } = require("../models/index");

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
                include: [{
                    model: User,
                    attribures: ['id', 'name', 'email'],
                }, {
                    model: Product,
                    attribures: ['id', 'productName'],
                    include: {
                        model: Category,
                        attributes: ['id', 'categoryName']
                    }
                },
                ],
            });
            res.status(200).send(reviews)
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err });
        }
    },
    async update(req, res) {
        try {
            const updatedReview = await Review.update(req.body, {
                where: req.params.id
            })
            updatedReview[0] === 1 ?
                res.status(200).send({ msg: `Review ID:${req.params.id} actualizado correctamente` })
                :
                res.status(404).send({ msg: `No se a encontrado review con ID: ${req.params.id}` });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: `Ha habido un error`, err })
        }
    },
    async delete(req, res) {
        try {
            await Review.destroy({
                where: { id: req.params.id }
            })
            res.status(200).send({ msg: `Review ID:${req.params.id}, fue eliminado` })
        } catch (err) {
            console.error(err)
            res.status(404).send(err)
        }
    }
}

module.exports = ReviewController;