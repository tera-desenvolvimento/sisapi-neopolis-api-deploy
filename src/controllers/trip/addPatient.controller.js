const tripModel = require("../../models/trip.model");

async function addPatient(tripId, patientData) {
  try {
    const updatedTrip = await tripModel.findByIdAndUpdate(
      tripId,
      { $push: { patients: patientData } },
      { new: false }
    );
    return updatedTrip;
  } catch (error) {
    throw new Error("Error adding patient to trip");
  }
}

module.exports = addPatient;