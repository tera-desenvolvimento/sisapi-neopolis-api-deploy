const tripDestinationModel = require("../../models/tripDestination.model");

async function createTripDestinationController(location) {
    try {
        const newTripDestination = await tripDestinationModel.create({ location });

        return {
            status: 200,
            message: "Trip destination created successfully",
            tripDestination: newTripDestination
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error creating trip destination",
            error: error.message
        };
    }
}

module.exports = createTripDestinationController;
