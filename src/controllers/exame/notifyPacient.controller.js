const exameModel = require('../../models/exame.model');
const axios = require('axios');

async function notifyPacient(data) {
    try {
        const exameData = await exameModel.find({ exameId: data.exameId });
        const endpoint = process.env.WHAPI_BOT_URL + "/sendMessage";
        
        let messageData = `📢 Este é o canal oficial de notificações da Secretaria Municipal de Saúde.\n\nOlá, ${exameData[0].patientName}! 👋\n\nSeu exame de ${exameData[0].type} 🧪 já está disponível!\nA retirada pode ser feita na Secretaria de Saúde 🏥\n📍 Rua do Bonfim, nº 565 – Neópolis\n🕒 Segunda a sexta, das 7h30 às 13h\n\n⚠️ Este número envia apenas notificações e não recebe mensagens.\n\nEm caso de dúvidas, procure diretamente a Secretaria. 😊`;

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
                status: 200,
                message: "EXAME_NOTIFICATION_FAILED",
                error: sendMessage.data,
            }
        }        
    } catch (error) {
        return {
            status: 200,
            message: "EXAME_NOTIFICATION_FAILED",
            error: error.message,
        }
    }
}

module.exports = notifyPacient;