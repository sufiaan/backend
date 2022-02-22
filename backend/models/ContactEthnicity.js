const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactEthnicitySchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    ethnicity: {
            HispanicOrLatino:{
                type:Object,
                required:true
            },
            WhiteOrNonLatino:{
                type:Object,
                required:true
            },
            AfricanAmerican:{
                type:Object,
                required:true
            },
            Asian:{
                type:Object,
                required:true
            },
            Other:{
                type:Object,
                required:true
            }
        }
    },
    {
        collection: 'ContactEthnicity'
    });
    
module.exports = mongoose.model('ContactEthnicity', ContactEthnicitySchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)