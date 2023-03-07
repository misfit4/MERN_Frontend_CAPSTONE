const mongoose = require('mongoose');
//create schema to hold structuring of content
const Schema = mongoose.Schema;

const PatientShema = new Schema({
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
    }
    Health_History:{
        type: String,
        require: true,
    }
});

modue.exports = mongoose.model("PatientInformation", PatientShema);