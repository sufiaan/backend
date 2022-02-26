//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let residenceSchema = new Schema({
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
    address:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    state:{
        type: Array,
        required:true
    },
    country:{
        type: Array,
        required:true
    },
    zip:{
        type: Number,
        required:true
    },
    totalRent:{
        type: Number,
        required:true
    },
    timeofResidence:{
        type: Array,
        required:true
    },
    livingArrangements:{
        type: Array,
        required:true
    },
    hasUtilities:{
        type: Boolean,
        required:false
    },
    isSubsidized:{
        type: Boolean,
        required:false
    },
    isSingleParent:{
        type: Boolean,
        required:false
    },
    modifyAt:{
        type:null,
        required:false
    }
},
    {
        collection: 'residence'
    });
    
module.exports = mongoose.model('residence', residenceSchema)

// Residence Schema Description:
// 1. _id: String (uuid.v1 for randome value)
// 2. clientId: Number (Link the activity to client)