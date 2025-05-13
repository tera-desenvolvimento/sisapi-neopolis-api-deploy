const userModel = require('../models/user.model');
const JWT = require('jsonwebtoken');

async function checkSession(token) {
    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
        const user = await userModel.findOne({ userId: decoded.userId });

        if (!user) {
            return {
                status: 404,
                message: 'USER_NOT_FOUND',
            };
        } else if (!user.isActive) {
            return {
                status: 403,
                message: 'USER_INACTIVE',
            };
        } else {
            return {
                status: 200,
                message: 'SESSION_VALID',
                data: {
                    userId: user.userId,
                    docId: user.docId,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            };
        }
    } catch (error) {
        return {
            status: 401,
            message: 'INVALID_TOKEN',
            error: error.message,
        };
    }
}

module.exports = checkSession;