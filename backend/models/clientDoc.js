//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let clientDocSchema = new Schema({
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
    ssn: {
        type: Number,
        required: true
    },
    driverLicense:{
        type:Number,
        required:true
    },
    otherDoc:{
        type:String,
    }
},
    {
        collection: 'clientDoc'
    });
    
module.exports = mongoose.model('clientDoc', clientDocSchema)

/* Client Document Schema Description:
1. _id : String (uuid.v1 for randome value)
2. clientId : Number (Link the activity to client)
3. ssn : Number (required and will be stored without formatting)
4. driverLicense : Number (required and stored without formatting)
5. otherDoc : null (not required and will be empty unless specified)*/