//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let eventSchema = new Schema({
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
    eventName: {
        type: String,
        required: true
    },
    time: { 
        type: String,
        required: true
    },
    location:{
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        zipcode:{
            type:Number,
            required: true
        }
    }
},
    {
        collection: 'event'
    });
    
module.exports = mongoose.model('event', eventSchema)

/* Event Schema Description:
1. _id: String (uuid.v1 for randome value)
2. clientId: Number (Link the activity to client)
3. eventName : String (name of the event taking place)
4. time : String (store as string since datetime doesn't exist in JSON)
5. location : {(nested JSON for event location data)
    a. address : String (holds the address of the event)
    b. city : String (holds the city of the event)
    c. zipcode : Number (holds the zipcode of the event)
} */