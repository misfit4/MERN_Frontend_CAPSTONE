const Patient = require("../Model/PatientInformation")
const getAllPatients = async (req,res,next) =>{
    let patients;
    try{
        patients = await Patient.find();

    }catch(err){
        console.log(err);
    }
    if(!patients){
        //display negative http status if DB is empty
        return res.status(404).json({message:"No patients found"})
    }
    return res.status(200).json({patients});
}

//create function to select an individual value from DB
const getByID = async (req,res,next) =>{
    const id = req.params.id;
    let patient;
    try{
        patient = await Patient.findByID(id);
    }catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(404).json({message:"No Patient Found!"});

    }
    return res.status(200).json({patient});
};

//add a vehicle to DB
const addPatient = async (req,res,next) =>{
    const{Name, DOB, insurance_provider, patient_ID, health_history} = req.body;
    let patient;
    try{
        patient = new Patient({
            Name,
            DOB,
            insurance_provider,
            patient_ID,
            health_history
        });
        await patient.save();
    }
    catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(500).json({message: "Unable to Add Patient"});
    }
    return res.status(201).json({patient});
};

//create function to Update a value
const updatePatient = async (req,res,next) =>{
    const id = req.params.id;
    const {Name, DOB, insurance_provider, patient_ID, health_history} = req.body;
    let patient;
    try{
        patient = await Patient.findByIdAndUpdate(id,{
            Name,
            DOB,
            insurance_provider,
            patient_ID,
            health_history
        });
        patient = await patient.save();
    }
    catch(err){
        console.log(err);
    }
    if(!patient){
        return res.status(404).json({message: "Unable to update by this ID"});
    }
    return res.status(200).json({patient});
};

//delete a vehicle from DB by way  of its ID value

const deletePatient = async (req,res,next) =>{
    const id = req.params.id;
    let patient;
    try{
        patient = await Patient.findByIdAndRemove(id);
    }catch(err){
        console.log(err);

    }
    if(!patient){
        return res.status(404).json({message:"Unable to delete by this ID"});
    }
    return res.status(200).json({patient: "Patient Successfully Deleted"});
};

//export functions so that they can be assigned to router for URLS

exports.getAllPatients = getAllPatients;
exports. getByID = getByID;
exports.addPatient = addPatient;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;