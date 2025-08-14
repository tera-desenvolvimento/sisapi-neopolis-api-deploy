const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickName: {
        type: String
    },
    docId: {
        type: String,
        required: true,
        unique: true
    }
})

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
