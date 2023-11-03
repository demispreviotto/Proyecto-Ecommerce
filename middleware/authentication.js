const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { userId: user.id },
                    { token: token }
                ]
            }
        });
        if (!tokenFound) {
            return res.status(401).send({ msg: 'No estas autorizado' });

        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send({ err, msg: 'Ha habido un problema con el token' })
    }
}

const isAdmin = async (req, res, next) => {
    const admins = ['admin', 'superadmin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({ msg: 'Acceso denegado' })
    }
    next();
}
const isSuperAdmin = async (req, res, next) => {
    const admins = 'superadmin';
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({ msg: 'Acceso denegado' })
    }
    next();
}

module.exports = { authentication, isAdmin, isSuperAdmin }