const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    cellNum:{
        type: Number,
        required:true
    },
    workNum:{
        type: Number,
        required:false
    },
    homeNum:{
        type: Number,
        required:false
    },
    personalEmail:{
        type: String,
        required:true
    },
    otherEmail:{
        type: String,
        required:false
    },
    maritalStatus:{
        type: Boolean,
        required:true
    },
    language:{
        type: Array,
        required:true
    },
    ethnicity:{
        type: Array,
        required:true
    },
    priorityPopulation:{
        type: Array,
        required:true
    },
    isPregnency:{
        type: Boolean,
        required:true
    },
    isTeenParent:{
        type: Boolean,
        required:true
    },
    modifyAt:{
        type:Date,
        required:false
    }
},
    {
        collection: 'contact'
    });
    
module.exports = mongoose.model('contact', contactSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)