const exameModel = require('../../models/exame.model');

async function listPacientExames(docId) {
    try {
        const exames = await exameModel.find({ delivered: false, docId: docId });
        
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

module.exports = listPacientExames;