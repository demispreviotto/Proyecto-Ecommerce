const { Category } = require("../models/index");

const CategoryController = {
    async create(req, res) {
        try {
            const category = await Category.create(req.body)
            console.log(category)
            res.status(201).send({ msg: 'Categoria creada con exito', category })
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
        }
    },
    async updateByID(req, res) {
        try {
            const updatedCategory = await Category.update(req.body, {
                where: { id: req.params.id }
            });
            updatedCategory[0] === 1 ?
                res.status(200).send({ msg: `Categoria ${req.body.CategoryName} actualizada` })
                :
                res.status(404).send({ msg: `Categoria no encontrada` });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
        }
    },
    async deleteByID(req, res) {
        try {
            await Category.destroy({
                where: { id: req.params.id },
            });
            res.status(200).send({ msg: `Categoria ID:${req.params.id}, fue eliminada` })
        } catch (err) {
            console.error(err)
            res.status(404).send(err)
        }
    },
    async getByID(req, res) {
        try {
            const findedCategory = await Category.findByPk(req.params.id);
            res.status(200).send(`ID: ${req.params.id} Categoria: ${findedCategory.dataValues.categoryName}`);
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado categoryo con ID:${res.params.id}`, err });
        }
    },
    async getByName(req, res) {
        try {
            const findedCategory = await Category.findOne({ where: { categoryName: req.params.categoryName } });
            res.status(200).send(`Categoria: ${findedCategory.dataValues.categoryName}, ID: ${findedCategory.dataValues.id}`);
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado categoria con ID:${res.params.id}`, err });
        }
    },
}

module.exports = CategoryController;