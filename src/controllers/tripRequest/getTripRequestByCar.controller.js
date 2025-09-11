const tripRequestModel = require('../../models/tripRequest.model');

async function getTripRequestByCar(tripDate, exitTime) {
    try {
        const requests = await tripRequestModel.find({ tripDate, exitTime });
        return {
            status: 200,
            message: "Trip requests retrieved successfully",
            requestsCount: requests.length
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error retrieving trip requests",
            error: error.message
        };
    }
}

module.exports = getTripRequestByCar;