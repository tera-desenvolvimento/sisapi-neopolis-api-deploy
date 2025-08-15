const tripDestinationModel = require("../../models/tripDestination.model");

async function listTripDestinations() {
    try {
        const tripDestinations = await tripDestinationModel.find();
        return {
            status: 200,
            message: "Trip destinations retrieved successfully",
            tripDestinations
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error retrieving trip destinations",
            error: error.message
        };
    }
}

module.exports = listTripDestinations;
