const exameTypeModel = require('../../models/exameType.model');

async function createExameType(type) {
    try {
        const exameTypes = await exameTypeModel.find();
        let exameTypeId;

        if (exameTypes.length === 0) {
            exameTypeId = "type_00001";
        } else {
            exameTypeId = "type_" + String(exameTypes.length + 1).padStart(5, '0');
        }

        const exameTypeCreated = await exameTypeModel.create({
            exameTypeId: exameTypeId,
            type: type
        });

        return {
            status: 200,
            message: "EXAME_TYPE_CREATED_SUCCESSFULLY",
            data: exameTypeCreated
        };

    } catch (error) {
        return {
            status: 500,
            message: "ERROR_WHILE_CREATING_EXAME_TYPE",
            error: error.message
        };
    }
}

module.exports = createExameType;