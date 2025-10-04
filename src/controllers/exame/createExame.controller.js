const exameModel = require('../../models/exame.model'); 

async function createExame(data) {
    try {
        const exames = await exameModel.find();
        let exameId;

        if (exames.length === 0){
            exameId = "exame_00001";
        } else {
            var lastExameId = exames[exames.length - 1].exameId;
            var treatedId = parseInt(lastExameId.split("_")[1])

            exameId = `exame_${String(treatedId + 1).padStart(5, '0')}`;
        }

        const exameCreated = await exameModel.create({
            exameId: exameId,
            docId: data.docId,
            type: data.type,
            arrivedDate: new Date().toISOString(),
            patientName: data.patientName,
            patientNumber: data.patientNumber
        })

        return {
            status: 200,
            message: "EXAME_CREATED_SUCCESSFULLY",
            data: exameCreated
        };

    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_CREATING_EXAME",
            error: error.message,
        };
    }
}

module.exports = createExame;