const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let educationSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    hasAttended:{
        type:Boolean,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    lastGrade:{
        type:String,
        required:false
    },
    hasGraduated:{
        type:Boolean,
        required:false
    },
    degree:{
        type:Array,
        required:false
    },
    certification:{
        type:Boolean,
        required:false
    },
    modifyAt:{
        type:Date,
        required:false
    }
},
    {
        collection: 'education'
    });
    
module.exports = mongoose.model('education', educationSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)