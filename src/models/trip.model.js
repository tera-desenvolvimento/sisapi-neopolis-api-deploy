const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
    {
        driverData: {
            type: Object
        },
        date: {
            type: String,
            required: true
        },
        exitTime: {
            type: String
        },
        restTime: {
            type: String
        },
        returnTime: {
            type: String
        },
        arriveTime: {
            type: String
        },
        destination: {
            type: String
        },
        vehicleId: {
            type: String
        },
        patients: {
            type: Array,
            default: []
        },
        driverId: {
            type: String
        }
    }
)

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;