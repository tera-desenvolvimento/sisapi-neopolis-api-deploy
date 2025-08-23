const vehicleModel = require("../../models/vehicle.model");

async function createVehicle(description, plate, inspectionStatus, inspectionDetails) {
    const newVehicle = new vehicleModel({
        description,
        plate,
        inspectionStatus,
        inspectionDetails
    });

    await newVehicle.save();
    
    return newVehicle;
};

module.exports = createVehicle;
