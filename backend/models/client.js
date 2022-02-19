const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
    clientId: {
        type: Number,
        required: true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
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
       type:null,
       required:false
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
       type:Array,
       required:true
   },
   modifyAt:{
       type:null,
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