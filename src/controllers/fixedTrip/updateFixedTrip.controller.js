const fixedTripModel = require("../../models/fixedTrip.model");

async function updateFixedTrip(tripId, updates) {
    try {
        const updatedFixedTrip = await fixedTripModel.findByIdAndUpdate(tripId, updates, { new: false });
        
        if (!updatedFixedTrip) {
            return {
                status: 200,
                message: "Trip not found"
            };
        }

        return {
            status: 200,
            message: "Fixed trip updated successfully",
            trip: await fixedTripModel.findById(tripId)
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error updating fixed trip",
            error: error.message
        };
    }
}

module.exports = updateFixedTrip;