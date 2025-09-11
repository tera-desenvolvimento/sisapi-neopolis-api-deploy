const mongoose = require('mongoose');

const tripRequestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        docId: {
            type: String,
            required: true
        },
        tripDate: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String, 
            required: true
        },
        pickupLocation: {
            type: String,
            required: true 
        },
        destination: {
            type: String,
            required: true
        },
        shedulingDocumentImage: {
            type: String,
            required: true
        },
        requestStatus: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true
    }
)

const TripRequest = mongoose.model('TripRequest', tripRequestSchema);

module.exports = TripRequest;