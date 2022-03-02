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
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
},
    {
        collection: 'worker'
    });
    
module.exports = mongoose.model('worker', workerSchema)

/* Worker Schema Description:
1. _id : String (uuid.v1 for random value)
2. clientId : Number (Link the activity to client)
3. firstName : String (first name of worker)
4. lastName : String (last name of worker) */