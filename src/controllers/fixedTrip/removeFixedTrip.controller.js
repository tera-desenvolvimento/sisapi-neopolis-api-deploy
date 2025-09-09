const fixedTripModel = require("../../models/fixedTrip.model");

async function removeFixedTrip(tripId) {
    try {
        const fixedTrip = await fixedTripModel.findById(tripId);

        if (!fixedTrip) {
            return {
                status: 200,
                message: "Fixed trip not found"
            };
        } else if (fixedTrip.patients.length) {
            return {
                status: 200,
                message: "Fixed trip has patients"
            }
        } else {
            await fixedTripModel.findByIdAndDelete(tripId);

            return {
                status: 200,
                message: "Fixed trip removed successfully"
            };
        }
        
    } catch (error) {
        return {
            status: 200,
            message: "Error removing fixed trip",
            error: error.message
        };
    }
}

module.exports = removeFixedTrip;