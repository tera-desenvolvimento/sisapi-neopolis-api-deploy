const fixedTripModel = require("../../models/fixedTrip.model");

async function findTrip(tripId) {
    try {
        const trip = await fixedTripModel.findById(tripId);
        return trip;
    } catch (error) {
        return {
            error: "Error fetching trip"
        };
    }
}

module.exports = findTrip;
