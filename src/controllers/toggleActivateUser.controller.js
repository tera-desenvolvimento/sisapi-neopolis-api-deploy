const userModel = require('../models/user.model');

async function toggleActivateUser(docId) {
    try {
        const user = await userModel.findOne({ docId: docId });

        if (!user) {
            return {
                status: 404,
                message: 'USER_NOT_FOUND',
            };
        }
        user.isActive = !user.isActive;
        await user.save();

        const userUpdated = await userModel.findOne({ docId: docId });
        return {
            status: 200,
            message: 'USER_ACTIVATION_TOGGLED',
            data: {
                docId: userUpdated.docId,
                name: userUpdated.name,
                email: userUpdated.email,
                role: userUpdated.role,
                isActive: userUpdated.isActive,
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

module.exports = toggleActivateUser;