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
        required:true
    },
    workComp:{
        type: Number,
        required:true
    },
    childSupport:{
        type: Number,
        required:true
    },
    tanf:{
        type: Number,
        required:true
    },
    ssi:{
        type: Number,
        required:true
    },
    unemployment:{
        type: Number,
        required:true
    },
    socialSecurity:{
        type: Number,
        required:true
    },
    otherIncome:{
        type: Number,
        required:true
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

/*Income Schema Description:
1. _id: String (uuid.v1 for randome value)
2. clientId: Number (Link the activity to client)
3. isHeadofHousehold : Boolean (yes/no  runs the household)
4. monthlyIncome : Number (amount taken home. can be 0)
5. spouseSupport : Number (amount received in support from spouse. can be 0)
6. workComp : Number (amount received in worker's comp. can be 0)
7. childSupport : Number (amount received. can be 0)
8. tanf : Number (amount received. can be 0)
9. ssi : Number (amount received. can be 0)
10. unemployemnet : Number (amount received. can be 0)
11. socialSecurity : Number (amount received. can be 0)
12. otherIncome : Number (amount received. can be 0)
13. modifyAt : null (will change when entry is made)    */