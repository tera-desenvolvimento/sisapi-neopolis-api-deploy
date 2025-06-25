const exameModel = require('../../models/exame.model');
const axios = require('axios');

async function notifyPacient(data) {
    try {
        const exameData = await exameModel.find({ exameId: data.exameId });
        const endpoint = process.env.WHAPI_BOT_URL + "/sendMessage";
        
        let messageData = `Olá, *${exameData[0].patientName}*! Tudo bem?\n\nEstamos entrando em contato para informar que o resultado do seu exame de *${exameData[0].type}* já está disponível.\n\nVocê pode retirá-lo diretamente na Secretaria de Saúde durante o horário de atendimento.\n\nQualquer dúvida, estamos à disposição por aqui! 😊`;

        const sendMessage = await axios.post(
            endpoint,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                to: exameData[0].patientNumber,
                message: messageData
            }
        );

        if (sendMessage.data.data.sent) {
            const exameUpdated = await exameModel.findOneAndUpdate(
                { exameId: data.exameId },
                { alerted: true },
                { new: false }
            );

            return {
                status: 200,
                message: "EXAME_NOTIFICATION_SUCCESS",
                data: sendMessage.data
            }
        } else {
            return {
                status: 400,
                message: "EXAME_NOTIFICATION_FAILED",
                error: sendMessage.data,
            }
        }        
    } catch (error) {
        return {
            status: 500,
            message: "EXAME_NOTIFICATION_FAILED",
            error: error.message,
        }
    }
}

module.exports = notifyPacient;