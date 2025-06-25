const exameModel = require('../../models/exame.model');

async function deliverExame(data) {
    try {
        const updateExame = await exameModel.findOneAndUpdate(
            { exameId: data.exameId },
            {
                retiradaDate: new Date().toISOString(),
                retiranteDocId: data.retiranteDocId,
                retiranteName: data.retiranteName,
                delivered: true
            },
            { new: false }
        );

        const exameUpdated = await exameModel.findOne({ exameId: data.exameId });
        
        return {
            status: 200,
            message: "EXAME_DELIVERED_SUCCESSFULLY",
            data: exameUpdated
        };
    } catch (error) {
        return {
            status: 500,
            message: "ERROR_WHILE_DELIVER_EXAME",
            error: error.message,
        };
    }
};

module.exports = deliverExame;