const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const user = await User.fOp.andindByPk(payload.id);
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
module.exports = { authentication }