const tripModel = require("../../models/trip.model");

async function removeTrip(tripId) {
    try {
        const deletedTrip = await tripModel.findByIdAndDelete(tripId);
        if (!deletedTrip) {
            return {
                status: 200,
                message: "Trip not found"
            };
        }
        return {
            status: 200,
            message: "Trip removed successfully"
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error removing trip",
            error: error.message
        };
    }
}

module.exports = removeTrip;
