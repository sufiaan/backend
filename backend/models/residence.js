const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let residenceSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
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
    timeOfResidence:{
        type: Number,
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
        type:Date,
        required:false
    }
},
    {
        collection: 'residence'
    });
    
module.exports = mongoose.model('residence', residenceSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)