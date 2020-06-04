const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const StaticSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    
    contents: {
        type: Array,
        required: true
    }
});

module.exports = Static = mongoose.model('static', StaticSchema);