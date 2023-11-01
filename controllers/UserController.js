const { User, Token, Sequelize } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;

const UserController = {
    async create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        try {
            const user = await User.create({ ...req.body, password })
            res.status(201).send({ msg: 'Usuario creado con exito', user })
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
        }
    },
    async updateByID(req, res) {
        try {
            const updatedUser = await User.update(req.body, {
                where: { id: req.params.id }
            });
            updatedUser[0] === 1 ?
                res.status(200).send({ msg: `Usuario ${req.body.name} actualizado` })
                :
                res.status(404).send({ msg: `Usuario no encontrado` });
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: "Ha habido un error", err })
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
    }
}

module.exports = UserController;