const { Order, User } = require("../models/index");

const OrderController = {
    async create(req, res) {
        try {
            const order = await Order.create(req.body);
            console.log(order)
            res.status(201).send({ msg: 'Orden creada con exito', order });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err });
        }
    },
    async updateByID(req, res) {
        try {
            const updatedorder = await Order.update(req.body, {
                where: { id: req.params.id }
            });
            updatedorder[0] === 1 ?
                res.status(200).send({ msg: `Orden ${req.params.id} actualizado` })
                :
                res.status(404).send({ msg: `Orden no encontrada` });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
        }
    },
    async deleteByID(req, res) {
        try {
            await Order.destroy({
                where: { id: req.params.id },
            });
            // await OrderCategory.destroy({
            //     where: {
            //         orderId: req.params.id
            //     }
            // })
            res.status(200).send({ msg: `Orden ID:${req.params.id}, fue eliminada` })
        } catch (err) {
            console.error(err)
            res.status(404).send(err)
        }
    },
    async getByID(req, res) {
        try {
            const foundOrder = await Order.findByPk(req.params.id);
            const orderId = foundOrder.dataValues.id;
            const orderStatus = foundOrder.dataValues.orderStatus;
            const orderUser = foundOrder.dataValues.UserId;
            res.status(200).send(`Orden: ${orderId}, Status: ${orderStatus}, Usuario: ${orderUser}`);
            console.log(foundOrder)
        } catch (err) {
            console.error(err);
            res.status(404).send({ msg: `No se ha encontrado orden con ID:${res.params.id}`, err });
        }
    },
    async getAll(req, res) {
        try {
            const order = await Order.findAll({
                include: [User]
                // include: [{ model: User, through: { atributes: [] } }]
            });
            res.send(order);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al traer las ordenes');
        }
    }

}

module.exports = OrderController;