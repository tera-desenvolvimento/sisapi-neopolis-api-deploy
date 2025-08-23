const vehicleModel = require('../../models/vehicle.model');

async function updateVehicle(id, updateData) {
    const updatedVehicle = await vehicleModel.findByIdAndUpdate(id, updateData, { new: false });
    return updatedVehicle;
}

module.exports = updateVehicle;
