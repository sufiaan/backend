const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let intakeSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
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

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)