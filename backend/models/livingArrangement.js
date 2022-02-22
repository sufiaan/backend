const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let livingArrangementSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    livingArrangement: {
            renting:{
                type:Object,
                required:true
            },
            OwnerHouseOrTrailor:{
                type:Object,
                required:true
            },
            FriendsOrFamily:{
                type:Object,
                required:true
            },
            ShelterOrHotel:{
                type:Object,
                required:true
            },
            CarOrTent:{
                type:Object,
                required:true
            },
            TravelingThrough:{
                type:Object,
                required:true
            },
            race:{
                type:Array,
                required:false
            },
        }
    },
    {
        collection: 'livingArrangement'
    });
    
module.exports = mongoose.model('livingArrangement', livingArrangementSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)