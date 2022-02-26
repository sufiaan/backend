//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let educationSchema = new Schema({
    //client Id entry for tying together
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
        type:null,
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
        type:null,
        required:false
    }
},
    {
        collection: 'education'
    });
    
module.exports = mongoose.model('education', educationSchema)

// Education Schema Description:
// 1. clientId: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)