const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let incomeSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    isHeadofHousehold:{
        type: Boolean,
        required:true
    },
    monthlyIncome:{
        type: Number,
        required:true
    },
    spouseSupport:{
        type: Number,
        required:false
    },
    workComp:{
        type: Number,
        required:false
    },
    childSupport:{
        type: Boolean,
        required:true
    },
    tanf:{
        type: Number,
        required:false
    },
    ssi:{
        type: Number,
        required:false
    },
    unemployemnet:{
        type: Number,
        required:false
    },
    SocialSecurity:{
        type: Number,
        required:false
    },
    otherIncome:{
        type: Number,
        required:false
    },
    modifyAt:{
        type:null,
        required:false
    }
},
    {
        collection: 'income'
    });
    
module.exports = mongoose.model('income', incomeSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)