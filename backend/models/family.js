//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let familySchema = new Schema({
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
    familyMember:{
        lastname:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        gender:{
            type:Array,
            required:true
        },
        birthday:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        relation:{
            type:String,
            required:false
        },
        race:{
            type:Array,
            required:false
        },
        pregnant:{
            type:Boolean,
            required:false
        },
        whereWorkOrStudy:{
            type:String,
            required:true
        },
        occupationOrGrade:{
            type:String,
            required:true
        }
    }
},
    {
        collection: 'family'
    });
    
module.exports = mongoose.model('family', familySchema)

// Family Schema Description:
// 1. _id: String (uuid.v1 for randome value)
// 2. clientId: Number (Link the activity to client)