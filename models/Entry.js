const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    painScale: {
        type: Number,
        required: true,
    },
    medsTaken: {
        type: String,
        required: false,
    },
    length: {
        type: Number,
        required: false,
    },
    triggers: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Entry', EntrySchema)