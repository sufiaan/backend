const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
        type: Number,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    time: { 
        type: datetime,
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

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)