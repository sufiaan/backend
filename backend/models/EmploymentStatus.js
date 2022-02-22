const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmploymentStatusSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    employmentStatus: {
            Employed:{
                type:Object,
                required:true
            },
            Unemployed:{
                type:Object,
                required:true
            },
            Retired:{
                type:Object,
                required:true
            },
            Housewife:{
                type:Object,
                required:true
            }
        }
    },
    {
        collection: 'EmploymentStatus'
    });
    
module.exports = mongoose.model('EmploymentStatus', EmploymentStatusSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)