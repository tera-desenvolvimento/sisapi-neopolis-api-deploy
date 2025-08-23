const vehicleModel = require("../../models/vehicle.model");

async function listVehicles() {
    const vehicles = await vehicleModel.find();
    return vehicles;
}

module.exports = listVehicles;
