const mongoose = require('mongoose');
//create schema to hold structuring of content
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    Name:{
        type: String,
        require: true,
    },
    DOB:{
        type: String,
        require: true,
    },
    insurance_provider:{
        type: String,
        require: true,
    },
    Patient_ID:{
        type: String,
        require: true,
    },
    health_history:{
        type: String,
        require: true,
    }
});

modue.exports = mongoose.model("PatientInformation", PatientSchema);