const { Product, Category, ProductCategory } = require("../models/index");

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            product.addCategory(req.body.CategoryId);
            res.status(201).send({ msg: 'Producto creado con exito', product });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err });
        }
    },
    async updateByID(req, res) {
        try {
            const updatedProduct = await Product.update(req.body, {
                where: { id: req.params.id }
            });
            updatedProduct[0] === 1 ?
                res.status(200).send({ msg: `Producto ${req.body.productName} actualizado` })
                :
                res.status(404).send({ msg: `Producto no encontrado` });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
        }
    },
    async deleteByID(req, res) {
        try {
            await Product.destroy({
                where: { id: req.params.id },
            });
            await ProductCategory.destroy({
                where: {
                    ProductId: req.params.id
                }
            })
            res.status(200).send({ msg: `Producto ID:${req.params.id}, fue eliminado` })
        } catch (err) {
            console.error(err)
            res.status(404).send(err)
        }
    },
    async getByID(req, res) {
        try {
            const findedProduct = await Product.findByPk(req.params.id);
            const productName = findedProduct.dataValues.productName;
            const productPrice = findedProduct.dataValues.productPrice;
            res.status(200).send(`Producto: ${productName}, Precio: ${productPrice}€`);
            console.log(findedProduct)
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado producto con ID:${res.params.id}`, err });
        }
    },
    async getByName(req, res) {
        try {
            const findedProduct = await Product.findOne({ where: { productName: req.params.productName } });
            const productName = findedProduct.dataValues.productName;
            const productPrice = findedProduct.dataValues.productPrice;
            res.status(200).send(`Producto: ${productName}, Precio: ${productPrice}€`);
            console.log(findedProduct)
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado producto con ID:${res.params.id}`, err });
        }
    },
    async getByPrice(req, res) {
        try {
            const findedProduct = await Product.findOne({ where: { productPriec: req.params.productPrice } });
            const productName = findedProduct.dataValues.productName;
            const productPrice = findedProduct.dataValues.productPrice;
            res.status(200).send(`Producto: ${productName}, Precio: ${productPrice}€`);
            console.log(findedProduct)
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado producto con ID:${res.params.id}`, err });
        }
    },
    async sortByPrice(req, res) {
        try {
            const orderedProducts = await Product.findAll({
                order: [
                    [productPrice, 'ASC']
                ]
            });
            res.status(200).json(orderedProducts);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al ordenar los productos');
        }
    },
    async getAll(req, res) {
        try {
            const product = await Product.findAll({
                include: [{ model: Category, throught: { atributes: [] } }]
            });
            res.send(product);
        } catch (error) {
            console.error(err);
            res.status(500).send('Error al traer los productos');
        }
    }
}

module.exports = ProductController;