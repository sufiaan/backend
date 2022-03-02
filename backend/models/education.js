//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let educationSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    hasAttended:{
        type:Boolean,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    lastGrade:{
        type:String,
        required:false
    },
    hasGraduated:{
        type:Boolean,
        required:false
    },
    degree:{
        type:Array,
        required:false
    },
    certification:{
        type:Boolean,
        required:false
    },
    modifyAt:{
        type:Date,
        required:false
    }
},
    {
        collection: 'education'
    });
    
module.exports = mongoose.model('education', educationSchema)

// Education Schema Description:
// 1. clientId: Number (Link the activity to client)
// 2. hasAttended: Boolean (to find out if someone has attended school)
// 3. school: String (name of school they attended if valid if not valid should equate to "N/A")
// 4. lastGrade: String (last grade attended "11th", "12th", etc.)
// 5. hasGraduated: Boolean (to see if they have graduated)
// 6. degree: Array [diploma, technical, associate, bachelor, master, PHD]
// 7. certification: Boolean (if applicable)
// 8. modifyAt: null (will change when there is an entry)