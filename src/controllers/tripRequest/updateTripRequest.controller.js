const tripRequestModel = require('../../models/tripRequest.model');

async function updateTripRequest(tripRequestId, updateData) {
  try {
    await tripRequestModel.findByIdAndUpdate(tripRequestId, updateData, { new: false });

    const updatedTripRequest = await tripRequestModel.findById(tripRequestId);

    return updatedTripRequest;
  } catch (error) {
    throw new Error('Error updating trip request');
  }
}

module.exports = updateTripRequest;