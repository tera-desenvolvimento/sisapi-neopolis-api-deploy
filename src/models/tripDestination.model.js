const mongoose = require('mongoose');

const tripDestinationSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true
        }
    }
);

const TripDestination = mongoose.model('TripDestination', tripDestinationSchema);

module.exports = TripDestination;
