const userModel = require("../../models/user.model");

async function updateUser(userId, updates) {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: false });
        if (!updatedUser) {
            return {
                status: 200,
                message: "User not found"
            };
        }
        return {
            status: 200,
            message: "User updated successfully",
            trip: updatedUser
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
