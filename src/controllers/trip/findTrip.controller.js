const tripModel = require("../../models/trip.model");

async function findTrip(tripId) {
    try {
        const trip = await tripModel.findById(tripId);
        return trip;
    } catch (error) {
        return {
            error: "Error fetching trip"
        };
    }
}

module.exports = findTrip;
