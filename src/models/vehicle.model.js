const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true,
            unique: true
        },
        inspectionStatus: {
            type: Boolean,
            default: false
        },
        inspectionDetails: {
            type: String
        }
    }
)

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;