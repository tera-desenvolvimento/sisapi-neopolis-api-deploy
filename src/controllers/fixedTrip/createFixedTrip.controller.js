const FixedTrip = require("../../models/fixedTrip.model");

async function createFixedTrip() {
    try {
        const newFixedTrip = await FixedTrip.create({
            driverData: {},
            weekDay: "segunda",
            destination: "",
            vehicleId: "",
            patients: []
        });

        return {
            status: 200,
            message: "Fixed trip created successfully",
            fixedTrip: newFixedTrip
        }
    } catch (error) {
        return {
            status: 200,
            message: "Error creating fixed trip",
            error: error.message
        }
    }
}

module.exports = createFixedTrip;