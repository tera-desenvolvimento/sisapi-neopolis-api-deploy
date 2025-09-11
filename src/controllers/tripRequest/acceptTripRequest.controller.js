const axios = require('axios');
const tripRequestModel = require('../../models/tripRequest.model');
const updatedTripRequest = require('./updateTripRequest.controller');
const addPatient = require('../trip/addPatient.controller');

async function acceptTripRequest(tripRequestId, tripId) {
    try {
        const tripRequest = await tripRequestModel.findById(tripRequestId);
        if (!tripRequest) throw new Error('Trip request not found');

        const updatedRequest = await updatedTripRequest(tripRequestId, { requestStatus: 'accepted', tripId });

        await addPatient(tripId, {
            name: tripRequest.name,
            docId: tripRequest.docId,
            address: tripRequest.address,
            phone: tripRequest.phone,
            pickupLocation: tripRequest.pickupLocation,
            destination: tripRequest.destination
        });

        const endpoint = process.env.WHAPI_BOT_URL + "/sendMessage";
        const patientNumber = tripRequest.phone;
        const message = `Olá, seu pedido de transporte para o paciente ${tripRequest.name} no dia ${tripRequest.tripDate} foi aceito.\n\nEm breve, nossa equipe entrará em contato para confirmar os detalhes do transporte.`;

        await axios.post(endpoint, { message, to: patientNumber });

        return updatedRequest;
    } catch (error) {
        throw new Error('Error accepting trip request');
    }
}

module.exports = acceptTripRequest;