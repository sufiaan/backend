const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let familySchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientID: {
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

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)