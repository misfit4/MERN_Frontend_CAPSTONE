import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
const AddPatient = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      dob: "",
      insurance_carrier:"",
      patient_ID: "",
      health_history: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
const sendRequest = async () => {
      await axios
        .post("http://localhost:3002/patients", {
            name: String(inputs.name),
            dob: String(inputs.dob),
            insurance_carrier: String(inputs.insurance_carrier),
            patient_ID: Number(inputs.patient_ID),
            health_history: String(inputs.health_history),
        })
        .then((res) => res.data);
    };
const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/patients"));
    };
return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
          >
          
          <FormLabel>Name:</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>DOB:</FormLabel>
          <TextField
            value={inputs.dob}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="dob"
          />
           <FormLabel>Insurance Carrier:</FormLabel>
          <TextField
            value={inputs.insurance_carrier}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="insurance_carrier"
          />
          <FormLabel>Patient ID</FormLabel>
          <TextField
            value={inputs.patient_ID}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="patient_ID"
          />
          <FormLabel>Health History:</FormLabel>
          <TextField
            value={inputs.health_history}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="health_history"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Discharged"
          />
<Button variant="contained" type="submit">
            Add Patient
          </Button>
        </Box>
      </form>
    );
  };
  export default AddPatient;