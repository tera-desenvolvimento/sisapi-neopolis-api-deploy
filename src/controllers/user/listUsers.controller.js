const userModel = require('../../models/user.model');

async function listUsers() {
    try {
        const users = await userModel.find();
        return {
            status: 200,
            message: "USERS_RETRIEVED_SUCCESSFULLY",
            data: users,
        };
    } catch (error) {
        return {
            status: 500,
            message: "USERS_RETRIEVAL_FAILED",
            error: error.message,
        };
    }
}

module.exports = listUsers;