const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employmentSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    employmentStatus:{
        type:Array,
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
        required:false
    }
},
    {
        collection: 'employment'
    });
    
module.exports = mongoose.model('employment', employmentSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)