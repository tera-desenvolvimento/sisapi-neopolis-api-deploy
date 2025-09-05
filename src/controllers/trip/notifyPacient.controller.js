const tripModel = require('../../models/trip.model');
const axios = require('axios');

async function notifyPacient(tripId, patientNumber, patientName, destination) {
    try {
        const tripData = await tripModel.findById(tripId);
        const endpoint = process.env.WHAPI_BOT_URL + "/sendMessage";

        let messageData = `📢 Este é o canal oficial de notificações da Secretaria Municipal de Saúde de Neópolis.\n\nOlá, ${patientName}! Tenho uma mensagem aqui do nosso setor de transportes👋\n\nTô passando pra confirmar sua vaga no dia: ${tripData.date} no veículo das ${tripData.exitTime} com destino à ${destination}! 🚐\n\nÉ importante lembrar que o veículo sai no horário marcado, seja pontual.\n\n📍 Rua do Bonfim, nº 565 – Neópolis\n\n🕒 Segunda a sexta, das 7h30 às 13h\n\n⚠️ Este número envia apenas notificações e não recebe mensagens.\n\nEm caso de dúvidas, procure diretamente a Secretaria. 😊`;

        const sendMessage = await axios.post(
            endpoint,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                to: patientNumber,
                message: messageData
            }
        );

        return {
            status: 200,
            message: "EXAME_NOTIFICATION_SUCCESS",
            data: sendMessage.data
        }
    } catch (error) {
        return {
            status: 200,
            message: "EXAME_NOTIFICATION_FAILED",
            error: error.message
        }
    }
}

module.exports = notifyPacient;