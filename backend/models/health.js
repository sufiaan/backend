//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let healthSchema = new Schema({
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
    hasHealthInsurance:{
        type: Boolean,
        required:true
    },
    healthInsuranceProgram:{
        type: String,
        required:false
    },
    hasFoodStamps:{
        type: Boolean,
        required:true
    },
    foodStampsReason:{
        type: Array,
        required:false
    },
    modifyAt:{
        type:Date,
        required:Date.now
    }
},
    {
        collection: 'health'
    });
    
module.exports = mongoose.model('health', healthSchema)

/*Health Schema Description:
1. _id: String (uuid.v1 for randome value)
2. clientId: Number (Link the activity to client)
3. hasHealthInsurance : Boolean (yes/no if applicant has insurance)
4. healthInsuranceProgram : String (if applicable enter insurance company)
5. hasFoodStamps: Boolean (yes/no   if applicant has food stamps)
6. foodStampsReason : Array [income, kids, housing, etc.]
7. modifyAt : null (will change when entry is made) */