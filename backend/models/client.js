const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema 
let clientSchema = new Schema({
    //client Id entry for tying together
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
       type:String,
       required:true
   },
   modifyAt:{
       type:Date,
       default:Date.now
   }

},
    {
        collection: 'client'
    });
    
module.exports = mongoose.model('client', clientSchema)

/* Client Schema Description:
1. clientId : Number
2. firstName : String
3. lastName : String
4. birthday : String (mm/dd/yyyy)
5. phoneNumber : Number
6. zipCode : Number
7. marketSurvey : Array [option 1, option 2, option 3, etc.]
8. isNeedSupport : Boolean (yes/no)
9. numChildren : Number 
10. is65orOlder : Boolean (check for medicare or social security)
11. isVeteran : Boolean (yes/no)
12. raceEthnicity : Array 
13. isGettingVaccine : Boolean (yes/no)
14. vaccinePreference: String (brand if has a preference)
15. recentEvents: Array [will hold references to recent events]
16. events : Object [will hold information about specific events]
17. gender : Array
18. modifyAt : null (will be updated when entry is modified)*/