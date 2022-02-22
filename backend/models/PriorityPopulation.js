const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PriorityPopulationSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    PriorityPopulation: {
            ADAorHandicap:{
                type:Object,
                required:true
            },
            Mental:{
                type:Object,
                required:true
            },
            Elderly:{
                type:Object,
                required:true
            },
            HIV:{
                type:Object,
                required:true
            },
            Homeless:{
                type:Object,
                required:true
            },
            Veteran:{
                type:Object,
                required:true
            },
            Harvey:{
                type:Array,
                required:true
            },
        }
    },
    {
        collection: 'PriorityPopulation'
    });
    
module.exports = mongoose.model('PriorityPopulation', PriorityPopulationSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)