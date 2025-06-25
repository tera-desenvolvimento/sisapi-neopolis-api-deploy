const userModel = require('../../models/user.model');

async function findUser(docId) {
    try {
        const user = await userModel.findOne({ docId: docId });
        if (!user) {
            return {
                status: 404,
                message: 'USER_NOT_FOUND',
            };
        }
        return {
            status: 200,
            message: 'User found',
            data: {
                userId: user.userId,
                docId: user.docId,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        };
    }
    catch (error) {
        return {
            status: 500,
            message: 'INTERNAL_SERVER_ERROR',
            error: error.message,
        };
    }
}

module.exports = findUser;