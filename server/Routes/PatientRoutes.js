const express = require("express");
//utilize router to navigate urls
const router = express.Router();
//bring in schema to structure json information
const Patient = require("../Model/PatientInformation");
// require functionality from controllers to give router their behavior
const patientControllers = require("../Controllers/PatientControllers");

// assign functionality to urls and assign unique identifier in url

//localhost:3001/cars/get
router.get("/", patientControllers.getAllPatients);

//localhost:3001/cars/update
router.post("/", patientControllers.addPatient);

//localhost:3001/cars/get/:id
router.get("/:id", patientControllers.getByID);

//localhost:3001/cars/update/:id
router.put("/:id", patientControllers.updatePatient);

//localhost:3001/cars/:id
router.delete("/:id", patientControllers.deletePatient);

module.exports = router;