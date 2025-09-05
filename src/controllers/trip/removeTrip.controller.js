const tripModel = require("../../models/trip.model");

async function removeTrip(tripId) {
    try {
        const trip = await tripModel.findById(tripId);
        if (!trip) {
            return {
                status: 200,
                message: "Trip not found"
            };
        } else if (trip.patients.length) {
            return {
                status: 200,
                message: "trip has patients"
            }
        } else {
            await tripModel.findByIdAndDelete(tripId)
                .then(() => {
                    return {
                        status: 200,
                        message: "Trip removed successfully"
                    };
                })
        }
       
    } catch (error) {
        return {
            status: 200,
            message: "Error removing trip",
            error: error.message
        };
    }
}

module.exports = removeTrip;
