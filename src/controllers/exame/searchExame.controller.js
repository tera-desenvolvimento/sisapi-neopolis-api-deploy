const exameModel = require('../../models/exame.model');

async function searchExame(queryString, delivered) {
    const exames = await exameModel.find({ delivered: delivered }).find({patientName: { $regex: new RegExp(queryString), $options: 'i' }});
    return exames;
}

module.exports = searchExame;