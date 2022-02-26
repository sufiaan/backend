//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let workerSchema = new Schema({
    //good for assigning random value
    _id: {
        type: String,
        default: uuid.v1
    },
    //client Id entry for tying together
    clientId: {
        type: Number,
        required: true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
},
    {
        collection: 'worker'
    });
    
module.exports = mongoose.model('worker', workerSchema)

// Worker Schema Description:
// 1. _id: String (uuid.v1 for randome value)
// 2. clientId: Number (Link the activity to client)