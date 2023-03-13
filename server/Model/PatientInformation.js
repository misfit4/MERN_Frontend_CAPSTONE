const mongoose = require('mongoose');
//create schema to hold structuring of content
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    dob:{
        type: String,
        require: true,
    },
    insurance_carrier:{
        type: String,
        require: true,
    },
    patient_ID:{
        type: Number,
        require: true,
    },
    health_history:{
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("PatientInformation", PatientSchema);