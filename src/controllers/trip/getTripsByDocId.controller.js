const tripModel = require("../../models/trip.model");

async function getTripsByDocId(docId) {
    try {
        var findedTrips = []
        const trips = await tripModel.find();
        
        trips.forEach(trip => {
            trip.patients.forEach(patient => {
                if (patient.docId === docId) {
                    findedTrips.push(trip);
                }
            });
        });

        return findedTrips;
    } catch (error) {
        return error;
    }
}

module.exports = getTripsByDocId;