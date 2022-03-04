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
        firstName:{
            type:String,
            required:true
        },
        lastName:{
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
        ethnicity:{
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

/*Family Schema Description:
1. _id: String (uuid.v1 for random value)
2. clientId: Number (Link the activity to client)
3. familyMember : { (nested JSON for family member data for families)
    a. firstName : String (first name of family member)
    b. lastName : String (last name of family member)
    c. gender : Array (gender of family member)
    d. birthday : String (birthday of family member)
    e. age : Number (age of family member)
    f. relation : String (how they are related to applicant)
    g. ethnicity : Array (ethnicity of family member)
    h. pregnant : Boolean (yes/no if family member is pregnant)
    i. whereWorkOrStudy : String (where family member goes to work or school)
    j. occupationOrGrade : String (what the actual job is or what grade they are in)
}*/