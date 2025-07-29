const mongoose = require('mongoose');

const exameTypeSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            unique: true,
        }
    }
)

const ExameType = mongoose.model('ExameType', exameTypeSchema);

module.exports = ExameType;