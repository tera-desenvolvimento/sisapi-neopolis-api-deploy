const exameModel = require('../../models/exame.model');

async function removeExame(exameId) {
    try {
        const exame = await exameModel.findOne({ exameId: exameId });

        if (!exame) {
            return {
                status: 200,
                message: "Exame not found"
            };
        } else {
            await exameModel.findOneAndDelete({ exameId: exameId })
                .then(() => {
                    return {
                        status: 200,
                        message: "Exame removed successfully"
                    };
                })
        }
    } catch (error) {
        return {
            status: 200,
            message: "Error removing trip",
            error: error.message
        };
    }
}

module.exports = removeExame;