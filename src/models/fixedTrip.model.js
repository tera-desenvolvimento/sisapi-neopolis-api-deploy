const mongoose = require('mongoose');

const fixedTripSchema = new mongoose.Schema(
    {
        driverData: {
            type: Object,
            default: {}
        },
        weekDay: {
            type: String,
            default: "segunda"
        },
        destination: {
            type: String,
            default: ""
        },
        vehicheId: {
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