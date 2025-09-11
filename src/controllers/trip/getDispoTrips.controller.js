const tripModel = require("../../models/trip.model");

async function getDispoTrips(date) {
    try {
        var availableSeats = [
            {   
                exitTime: "04:00",
                availableSeats: 29,
                destination: "ARACAJU"
            },
            {   
                exitTime: "06:00",
                availableSeats: 13,
                destination: "PROPRIÁ"
            },
            {   
                exitTime: "09:00",
                availableSeats: 14,
                destination: "ARACAJU"
            }
        ];

        const trips = await tripModel.find({ date });

        trips.forEach(trip => {
            const patientsForTrip = trip.patients.length;

            if (trip.exitTime === "04:00") {
                availableSeats[0].availableSeats = availableSeats[0].availableSeats - patientsForTrip;
            } else if (trip.exitTime === "06:00") {
                availableSeats[1].availableSeats = availableSeats[1].availableSeats - patientsForTrip;
            } else if (trip.exitTime === "09:00") {
                availableSeats[2].availableSeats = availableSeats[2].availableSeats - patientsForTrip;
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