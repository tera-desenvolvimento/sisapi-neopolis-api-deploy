const fixedTripModel = require("../../models/fixedTrip.model");

async function addPatient(tripId, patientData) {
  try {
    const updatedTrip = await fixedTripModel.findByIdAndUpdate(
      tripId,
      { $push: { patients: patientData } },
      { new: false }
    );
    
    return fixedTripModel.findById(tripId);
  } catch (error) {
    throw new Error("Error adding patient to trip");
  }
}

module.exports = addPatient;