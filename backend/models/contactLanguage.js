const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactLanguageSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    languages: {
            Spanish:{
                type:Object,
                required:true
            },
            English:{
                type:Object,
                required:true
            },
            Bilingual:{
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
        collection: 'ContactLanguage'
    });
    
module.exports = mongoose.model('ContactLanguage', ContactLanguageSchema)

// Designation:
// 1. clientID: Number (Link the activity to client)
// 2. program: String (Dropdown List: Adult Education / Family Support Services / Early Childhood / Youth Services)
// 3. shortNotes: String
// 4. datetime: Date
// 5. timeSpend: Number
// 6. workID: relationship manager
// 7. hasUsedServices: Boolean (true | false)
// 8. handlingStatus: String (Not at all | Partially | Fully)