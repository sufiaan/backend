const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientDocSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
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

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)