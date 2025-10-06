const userModel = require('../../models/user.model');

async function deleteUser(userId) {
    try {
        const user = userModel.findById(userId);

         if (!user) {
            return {
                status: 200,
                message: 'USER_NOT_FOUND',
            };
        } else {
            const removedUser = userModel.findByIdAndDelete(userId);

            return removedUser;
        }


    } catch (error) {
        return {
            status: 200,
            message: "Error removing trip",
            error: error.message
        };
    }
}

module.exports = deleteUser;