const fixedTripModel = require("../../models/fixedTrip.model");

async function listFixedTrips() {
    try {
        const fixedTrips = await fixedTripModel.find();

        return {
            status: 200,
            message: "Fixed trips retrieved successfully",
            fixedTrips
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error retrieving fixed trips",
            error: error.message
        };
    }
}

module.exports = listFixedTrips;