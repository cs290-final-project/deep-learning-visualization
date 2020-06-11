const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const LayerSchema = require('Layer');

// const LayerSchema = new Schema({

//     name: {
//         type: String,
//         //required: false
//     },
//     id: {
//         type: Number,
//         //required: true
//     },
//     type: {
//         type: String,
//         //required: true
//     },
//     activation: {
//         type: String,
//         //required: true
//     },
//     width: {
//         type: Number,
//         //required: true
//     }

// });

// Create Schema
const NetworkSchema = new Schema({

    name: {
        type: String,
        required: false,
        default: "Untitled"
    },
    description: {
        type: String,
        required: false
    },
    creator: {
        type: String,
        required: true,
        Default: "Anonymous"
    },
    date: {
        type: Date,
        default: Date.now 
    },
    layers: [{name: {
        type: String,
        //required: false
    },
    id: {
        type: Number,
        //required: true
    },
    type: {
        type: String,
        //required: true
    },
    activation: {
        type: String,
        //required: true
    },
    width: {
        type: Number,
        //required: true
    }}]
});

module.exports = Network = mongoose.model('network', NetworkSchema);