const tripDestinationModel = require("../../models/tripDestination.model");

async function removeTripDestination(id) {
    try {
        const deletedTripDestination = await tripDestinationModel.findByIdAndDelete(id);
        
        if (!deletedTripDestination) {
            return {
                status: 200,
                message: "Trip destination not found"
            };
        }

        return {
            status: 200,
            message: "Trip destination removed successfully"
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error removing trip destination",
            error: error.message
        };
    }
}

module.exports = removeTripDestination;