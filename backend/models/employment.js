//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let employmentSchema = new Schema({
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
    employmentStatus:{
        type:String,
        required:true
    },
    years:{
        type:Number,
        required:false
    },
    employer:{
        type:String,
        required:false
    },
    occupation:{
        type:String,
        required:false
    },
    modifyAt:{
        type:Date,
        required:Date.now
    }
},
    {
        collection: 'employment'
    });
    
module.exports = mongoose.model('employment', employmentSchema)

// Employment Schema Description:
// 1. _id: String (uuid.v1 for random value)
// 2. clientId: Number (Link the activity to client)
