const vehicleModel = require("../../models/vehicle.model");

async function removeVehicle(id) {
    const deletedVehicle = await vehicleModel.findByIdAndDelete(id);
    return deletedVehicle;
}

module.exports = removeVehicle;