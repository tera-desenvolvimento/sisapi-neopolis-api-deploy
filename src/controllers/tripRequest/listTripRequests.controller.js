const tripRequestModel = require('../../models/tripRequest.model');

async function listTripRequests() {
    try {
        const tripRequests = await tripRequestModel.find();

        return {
            status: 200,
            message: "TRIP_REQUESTS_LISTED_SUCCESSFULLY",
            data: tripRequests
        };
    } catch (error) {
        return {
            status: 200,
            message: "ERROR_WHILE_LISTING_TRIP_REQUESTS",
            error: error.message
        };
    }
}

module.exports = listTripRequests;