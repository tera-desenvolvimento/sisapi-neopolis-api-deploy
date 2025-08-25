const tripModel = require("../../models/trip.model");

async function createTrip(date) {
    try {
        const newTrip = new tripModel({ 
            date,
            destination: "",
            driverData: {},
            exitTime: "",
            restTime: "",
            returnTime: "",
            arriveTime: "",
            vehicleId: "",
            driverId: ""
        });
        await newTrip.save();
        return {
            status: 200,
            message: "Trip created successfully",
            trip: newTrip
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error creating trip",
            error: error.message
        };
    }
}

module.exports = createTrip;
