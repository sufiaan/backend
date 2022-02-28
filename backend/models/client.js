const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    clientId: {
        type: Number,
        required: true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },  
    phoneNumber:{
        type:Number,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    },
    marketSurvey:{
        type:Array,
        required:false
    },
    isNeedSupport:{
        type:Boolean,
        required:true
   },
   numChildren:{
       type:Number,
       required:false
   },
   is65orOlder:{
       type:Boolean,
       required:false
   },
   isVeteran:{
       type:Boolean,
       required:false
   },
   raceEthnicity:{
       type:Array,
       required:false
   },
   isGettingVaccine:{
       type:Boolean,
       required:false
   },
   isVaccinated:{
       type:Boolean,
       required:false
   },
   vaccinePreference:{
       type:String,
   },
   recentEvents:{
       type:Array,
       required:true
   },
   events:{
       type:Object,
       required:true
   },
   gender:{
       type:String,
       required:true
   },
   modifyAt:{
       type:Date,
       required:false
   }

},
    {
        collection: 'client'
    });
    
module.exports = mongoose.model('client', clientSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)