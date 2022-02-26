//define constants neccesary for our schema and mongoose usage
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema
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

/* Contact Ethnicity Dropdown Schema Description:
1. _id : String (uuid for random value)
2. ethnicity : {
    nested json to hold different options in dropdown
    a. HispanicOrLatino : Object
    b. WhiteOrNonLatino : Object
    c. AfricanAmerican : Object
    d. Asian : Object
    e. Other : Object
}
*/