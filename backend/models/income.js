//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let incomeSchema = new Schema({
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

// Income Schema Description:
// 1. _id: String (uuid.v1 for randome value)
// 2. clientId: Number (Link the activity to client)