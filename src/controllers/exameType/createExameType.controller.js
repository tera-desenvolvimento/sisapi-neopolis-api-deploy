const exameTypeModel = require('../../models/exameType.model');

async function createExameType(type) {
    try {
        const exameTypeCreated = await exameTypeModel.create({
            type: type
        });

        return {
            status: 200,
            message: "EXAME_TYPE_CREATED_SUCCESSFULLY",
            data: exameTypeCreated
        };

    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_CREATING_EXAME_TYPE",
            error: error.message
        };
    }
}

module.exports = createExameType;