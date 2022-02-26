//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let contactSchema = new Schema({
    //client Id entry for tying together
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
        required:false
    },
    otherEmail:{
        type: String,
        required:false
    },
    maritalStatus:{
        type: Array,
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
    isPregnant:{
        type: Boolean,
        required:false
    },
    isTeenParent:{
        type: Boolean,
        required:false
    },
    modifyAt:{
        type:null,
        required:false
    }
},
    {
        collection: 'contact'
    });
    
module.exports = mongoose.model('contact', contactSchema)

/* Contact Schema Description:
1. clientId : Number
2. cellNum : Number (required)
3. workNum : Number (not required)
4. homeNum : Number (not required)
5. personalEmail : String (not required  // not everyone has an email)
6. otherEmail : String (not required either but another point of contact)
7. maritalStatus : Array [single, married, widowed, etc.]
8. language : Array [english, spanish, chinese, etc.] 
9. ethnicity : Array 
10. priorityPopulation : Array [ADA, mental, elderly, etc.]
11. isPregnant : Boolean (yes/no not required)
12. itTeenParent : Boolean (yes/no not required)
13. modifyAt : null (will change when there is an entry)*/