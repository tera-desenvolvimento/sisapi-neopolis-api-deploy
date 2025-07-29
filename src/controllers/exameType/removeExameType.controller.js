const exameTypeModel = require('../../models/exameType.model');

async function removeExameType(exameType) {
    try {
        const exameType = await exameTypeModel.findOneAndDelete({ type: exameType });

        if (!exameType) {
            return {
                status: 200,
                message: "EXAME_TYPE_NOT_FOUND"
            };
        }

        return {
            status: 200,
            message: "EXAME_TYPE_REMOVED_SUCCESSFULLY",
            data: exameType
        };

    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_REMOVING_EXAME_TYPE",
            error: error.message
        };
    }
}

module.exports = removeExameType;
