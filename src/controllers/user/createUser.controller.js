const userModel = require('../../models/user.model');

async function createUser(data) {
    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ docId: data.docId });
        if (existingUser) {
            return {
                status: 200,
                message: "DOCID_ALREADY_EXISTS",
            };
        }
        // Check if the email already exists
        const existingEmail = await userModel.findOne({ email: data.email });
        if (existingEmail) {
            return {
                status: 200,
                message: "EMAIL_ALREADY_EXISTS",
            };
        }
        const users = await userModel.find();
        let userId;

        if (users.length === 0) {
            userId = "user_00001";
        } else {
            userId = `user_${String(users.length + 1).padStart(5, '0')}`;
        }

        const userCreated = await userModel.create({
            userId: userId,
            docId: data.docId,
            email: data.email,
            name: data.name,
            role: data.role,
            modules: data.modules,
            password: data.password
        });

        return {
            status: 200,
            message: "USER_CREATED_SUCCESSFULLY",
            data: userCreated,
        };

    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_CREATING_USER",
            error: error.message,
        };
    }
}

module.exports = createUser;