const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const LayerSchema = new Schema({

    name: {
        type: String,
        required: false
    },
    id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    activation: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    }

});

module.exports = Layer = mongoose.model('layer', LayerSchema);