const userModel = require('../../models/user.model');
const JWT = require('jsonwebtoken');

async function authenticateUser(docId, password) {
    try {
        const user = await userModel.findOne({ docId: docId });

        if (!user) {
            return {
                status: 200,
                message: 'USER_NOT_FOUND',
            };
        } else if (user.password !== password) {
            return {
                status: 200,
                message: 'PASSWORD_MISMATCH',
            };
        } else if (!user.isActive) {
            return {
                status: 200,
                message: 'USER_INACTIVE',
            };
        } else {
            const token = JWT.sign({ userId: user.userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

            return {
                status: 200,
                message: 'AUTHENTICATION_SUCCESSFUL',
                data: {
                    token: token,
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
            status: 200,
            message: 'INTERNAL_SERVER_ERROR',
            error: error.message,
        };
    }
}

module.exports = authenticateUser;