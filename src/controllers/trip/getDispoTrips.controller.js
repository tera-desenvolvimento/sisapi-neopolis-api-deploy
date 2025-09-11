const tripModel = require("../../models/trip.model");

async function getDispoTrips(date) {
    try {
        var availableSeats = [
            {   
                exitTime: "04:00",
                availableSeats: 29
            },
            {   
                exitTime: "09:00",
                availableSeats: 14
            }
        ];

        const trips = await tripModel.find({ date });

        trips.forEach(trip => {
            const patientsForTrip = trip.patients.length;

            if (trip.exitTime === "04:00") {
                availableSeats[0].availableSeats = availableSeats[0].availableSeats - patientsForTrip;
            } else if (trip.exitTime === "09:00") {
                availableSeats[1].availableSeats = availableSeats[1].availableSeats - patientsForTrip;
            }
        });

        return {
            status: 200,
            message: "Available trips retrieved successfully",
            availableSeats
        };
    } catch (error) {
        return {
            status: 200,
            message: "Error retrieving available trips",
            error: error.message
        };
    }
}

module.exports = getDispoTrips;