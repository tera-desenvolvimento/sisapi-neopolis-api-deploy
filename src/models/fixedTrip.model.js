const mongoose = require('mongoose');

const fixedTripSchema = new mongoose.Schema(
    {
        driverId: {
            type: String,
            default: ""
        },
        weekDay: {
            type: String,
            default: "segunda"
        },
        destination: {
            type: String,
            default: ""
        },
        vehicleId: {
            type: String,
            default: ""
        },
        exitTime: {
            type: String,
            default: ""
        },
        patients: {
            type: Array,
            default: []
        }
    }
)

const FixedTrip = mongoose.model('FixedTrip', fixedTripSchema);

module.exports = FixedTrip;