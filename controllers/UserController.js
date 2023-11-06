const { User, Token, Sequelize, Order, Product, OrdersProducts } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;

const UserController = {
    async create(req, res, next) {
        try {
            const hash = bcrypt.hashSync(req.body.password, 10)
            const user = await User.create({
                ...req.body,
                password: hash,
                confirmed: false,
                role: 'user',
            });
            const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '48h' })
            const url = 'http://localhost:8080/users/confirm/' + emailToken
            await transporter.sendMail({
                to: req.body.email,
                subject: "Confirme su registro",
                html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
                <a href="${url}"> Click para confirmar tu registro</a>`,
            });
            res.status(201).send({ msg: 'Usuario creado con exito', user })
        } catch (err) {
            console.error(err);
            err.origin = 'User';
            next(err)
        }
    },
    async confirm(req, res) {
        try {
            const token = req.params.emailToken
            const payload = jwt.verify(token, jwt_secret)
            await User.update({ confirmed: true }, {
                where: {
                    email: payload.email
                }
            })
            res.status(201).send("Usuario confirmado con éxito");
        } catch (err) {
            console.error(err)
        }
    },

    async updateByID(req, res) {
        try {
            const userId = req.user.id;
            if (!userId) return res.status(400).send({ msg: 'Primero debe registrarse como usuario' })
            const userToUpdate = await User.update(req.body, { where: { id: userId } });
            userToUpdate[0] === 1 ?
                res.status(200).send({ msg: `Usuario ${req.body.name} actualizado` })
                :
                res.status(404).send({ msg: `Usuario no encontrado` });
        } catch (err) {
            console.error(err);
            next(err)
        }
    },
    async deleteByID(req, res) {
        try {
            await User.destroy({
                where: { id: req.params.id },
            });
            res.status(200).send({ msg: `Usuario ID:${req.params.id}, fue eliminado` })
        } catch (err) {
            console.error(err)
            res.status(404).send(err)
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } })
            if (!user) return res.status(400).send({ msg: 'Usuario o contrasena incorrectos' })
            if (!user.confirmed) { return res.status(400).send({ msg: 'Debes confirmar tu correo' }) }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) return res.status(400).send({ msg: 'Usuario o contraseña incorrecto' });
            const token = jwt.sign({ id: user.id }, jwt_secret)
            Token.create({ token, UserId: user.id })
            res.send({ msg: `Bienvenid@ ${user.name}`, user, token });
        } catch (err) {
            console.log(err);
            res.status(500).send({ msg: 'Ha ocurrido un error' })
        }
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ msg: 'Desconectado con exito' })
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: 'Hubo un problema al tratar de desconectarte' })
        }
    },
    async userOrders(req, res) {
        try {
            const userId = req.user.id;
            if (!userId) return res.status(400).send({ msg: "Primero debe registrarse como usuario" })
            const foundUser = await User.findByPk(userId, {
                include: [{
                    model: Order,
                    include: [{
                        model: Product,
                        through: {
                            model: OrdersProducts,
                            attributes: [],
                        }
                    },],
                }],
            })
            if (!foundUser) return res.status(404).send(`No se ha encontrado usuario con ID: ${res.params.id}`);
            res.send(foundUser)
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: `Error al obtener las órdenes y productos`, err })
        }
    }
}

module.exports = UserController;