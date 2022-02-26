//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let intakeSchema = new Schema({
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
    familyId:{
        type:Number,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    modifyAt:{
        type:null,
        required:false
    }
},
    {
        collection: 'intake'
    });
    
module.exports = mongoose.model('intake', intakeSchema)

// Intake Form Schema Description:
// 1. _id: String (uuid.v1 for randome value)
// 2. clientId: Number (Link the activity to client)