const userModel = require("../../models/user.model");

async function updateUser(userId, data) {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, {
            name: data.name,
            email: data.email,
            docId: data.docId,
            modules: data.modules
        }, { new: false });
        if (!updatedUser) {
            return {
                status: 200,
                message: "User not found"
            };
        }
        return {
            status: 200,
            message: "User updated successfully",
            user: updatedUser
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error updating user",
            error: error.message
        };
    }
}

module.exports = updateUser;
