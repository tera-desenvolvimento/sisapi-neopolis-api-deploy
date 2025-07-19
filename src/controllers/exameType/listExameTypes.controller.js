const exameTypeModel = require('../../models/exameType.model');

async function listExameTypes() {
    try {
        const exameTypes = await exameTypeModel.find();
        return {
            status: 200,
            message: "EXAME_TYPES_LISTED_SUCCESSFULLY",
            data: exameTypes
        };
    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_LISTING_EXAME_TYPES",
            error: error.message
        };
    }
}

module.exports = listExameTypes;