const exameModel = require('../../models/exame.model');

async function updateExame(data) {
    try {
        const updateExame = await exameModel.findOneAndUpdate(
            { exameId: data.exameId },
            {
                docId: data.docId,
                type: data.type,
                arrivedDate: data.arrivedDate,
                patientName: data.patientName,
                patientNumber: data.patientNumber
            },
            { new: false }
        );

        const exameUpdated = await exameModel.findOne({ exameId: data.exameId });

        return {
            status: 200,
            message: "EXAME_UPDATED_SUCCESSFULLY",
            data: exameUpdated
        };
    } catch (error) {
        return {
            status: 500,
            message: "ERROR_WHILE_UPDATE_EXAME",
            error: error.message,
        };
    }
}

module.exports = updateExame;