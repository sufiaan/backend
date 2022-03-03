//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
let residenceSchema = new Schema({
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
    address:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    state:{
        type: Array,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    zip:{
        type: Number,
        required:true
    },
    totalRent:{
        type: Number,
        required:true
    },
    timeOfResidence:{
        type: Number,
        required:true
    },
    livingArrangements:{
        type: Array,
        required:true
    },
    hasUtilities:{
        type: Boolean,
        required:false
    },
    isSubsidized:{
        type: Boolean,
        required:false
    },
    isSingleParent:{
        type: Boolean,
        required:false
    },
    modifyAt:{
        type:Date,
        default:Date.now
    }
},
    {
        collection: 'residence'
    });
    
module.exports = mongoose.model('residence', residenceSchema)

/* Residence Schema Description:
1. _id : String (uuid.v1 for random value)
2. clientId : Number (Link the activity to client)
3. address : String (for holding current address if applicable if not should be "N/A")
4. city : String (for holding city of current residence if applicable if not should be where event is held (if not "N/A"))
5. state : Array (for holding state of residence)
6. country : Array (country of residence)
7. zip : Number (zipcode for applicant)
8. totalRent : Number (amount they pay in rent. can be 0.)
9. timeOfResidence : Array [0-3 months, 3-6 months, 6-12 months, no house, etc.]
10. livingArrangements : Array [1 person, 2 people, 3 people, etc.]
11. hasUtilities : Boolean (yes/no  light,water,etc.)
12. isSubsidized : Boolean (receives assistance for housing)
13. isSingleParent : Boolean (yes/no   has kids)
14. modifyAt: null  (will change when entry is made) */