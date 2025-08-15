const tripModel = require("../../models/trip.model");

async function listTrips(date) {
    try {
        const trips = await tripModel.find({ date });
        return {
            status: 200,
            message: "Trips retrieved successfully",
            trips
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error retrieving trips",
            error: error.message
        };
    }
}

module.exports = listTrips;