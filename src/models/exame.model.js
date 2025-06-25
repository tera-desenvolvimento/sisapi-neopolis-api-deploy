const { required } = require('joi');
const mongoose = require('mongoose');

const exameSchema = new mongoose.Schema(
    {
        exameId: {
            type: String,
            required: true,
            unique: true,
        },
        docId: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
        },
        arrivedDate: {
            type: String,
            required: true,
        },
        patientName: {
            type: String,
            required: true
        },
        patientNumber: {
            type: String,
            required: true
        },
        retiradaDate: {
            type: String
        },
        retiranteDocId: {
            type: String
        },
        retiranteName: {
            type: String
        },
        alerted: {
            type: Boolean,
            default: false,
        },
        delivered: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

const Exame = mongoose.model('Exame', exameSchema);

module.exports = Exame;