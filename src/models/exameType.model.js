const mongoose = require('mongoose');

const exameTypeSchema = new mongoose.Schema(
    {
        exameTypeId: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
            unique: true,
        }
    }
)

const ExameType = mongoose.model('ExameType', exameTypeSchema);

module.exports = ExameType;