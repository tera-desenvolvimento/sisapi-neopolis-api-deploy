const axios = require('axios');

const tripRequestModel = require('../../models/tripRequest.model');

const updatedTripRequest = require('./updateTripRequest.controller');

async function declineTripRequest(tripRequestId, reason) {
  try {
    await tripRequestModel.findByIdAndUpdate(tripRequestId, { requestStatus: 'declined' }, { new: false });

    const declinedTripRequest = await tripRequestModel.findById(tripRequestId);
    const endpoint = process.env.WHAPI_BOT_URL + "/sendMessage";
    const patientNumber = declinedTripRequest.phone;

    const message = `Olá, seu pedido de transporte para o paciente ${declinedTripRequest.name} no dia ${declinedTripRequest.tripDate} foi recusado.\n\nMotivo: ${reason}\n\nPor favor, refaça sua solicitação ou entre em contato com a equipe de transporte para mais informações.`;

    await axios.post(endpoint, { message, to: patientNumber });
    return await updatedTripRequest(tripRequestId, { requestStatus: 'declined', reason });
  } catch (error) {
    throw new Error('Error declining trip request'); 
  }
}

module.exports = declineTripRequest;
