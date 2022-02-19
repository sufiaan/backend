const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workerSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
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

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)