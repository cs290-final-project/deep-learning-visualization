const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    //,
    // author: {
    //     type: String,
    //     required: true
    // },
    // type: {
    //               type: String,
    //     required: true  
    // },
    // width: {
    //     type: Number,
    //     required: true
    // }
});

module.exports = Item = mongoose.model('item', ItemSchema);