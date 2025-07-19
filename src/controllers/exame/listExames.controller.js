const exameModel = require('../../models/exame.model');

async function listExames() {
    try {
        const exames = await exameModel.find({ delivered: false });
        return {
            status: 200,
            message: "EXAMES_RETRIEVED_SUCCESSFULLY",
            data: exames,
        };
    } catch (error) {
        return {
            status: 200,
            message: "EXAMES_RETRIEVAL_FAILED",
            error: error.message,
        };
    }
}

module.exports = listExames;