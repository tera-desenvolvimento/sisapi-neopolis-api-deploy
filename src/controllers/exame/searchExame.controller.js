const exameModel = require('../../models/exame.model');

async function searchExame(queryString) {
    const exames = await exameModel.find({ delivered: false }).find({patientName: { $regex: new RegExp(queryString), $options: 'i' }});
    return exames;
}

module.exports = searchExame;