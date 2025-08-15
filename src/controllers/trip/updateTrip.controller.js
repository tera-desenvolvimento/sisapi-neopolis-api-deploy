const tripModel = require("../../models/trip.model");

async function updateTrip(tripId, updates) {
    try {
        const updatedTrip = await tripModel.findByIdAndUpdate(tripId, updates, { new: false });
        if (!updatedTrip) {
            return {
                status: 200,
                message: "Trip not found"
            };
        }
        return {
            status: 200,
            message: "Trip updated successfully",
            trip: updatedTrip
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error updating trip",
            error: error.message
        };
    }
}

module.exports = updateTrip;
