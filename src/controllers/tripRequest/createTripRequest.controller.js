const tripRequestModel = require('../../models/tripRequest.model');

async function createTripRequest(data) {
    try {
        const tripRequestCreated = await tripRequestModel.create({
            name: data.name,
            docId: data.docId,
            tripDate: data.tripDate,
            exitTime: data.exitTime,
            address: data.address,
            phone: data.phone,
            pickupLocation: data.pickupLocation,
            destination: data.destination,
            shedulingDocumentImage: data.shedulingDocumentImage
        })

        return {
            status: 200,
            message: "TRIP_REQUEST_CREATED_SUCCESSFULLY",
            data: tripRequestCreated
        };
    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_CREATING_TRIP_REQUEST",
            error: error.message
        };
    }
}

module.exports = createTripRequest;