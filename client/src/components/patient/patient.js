import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./patient.css";
const Patient = (props) => {
  const history = useNavigate();
  const { _id, name, dob, insurance_carrier, patient_ID, health_history} = props.patient;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3002/patients/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/patients"));
  };
return (
    <div className="card">
      <article>Patient Name:{name}</article>
      <h3>D.O.B:{dob}</h3>
      <h3>insurance_carrier:{insurance_carrier}</h3>
      <h3>Patient ID:{patient_ID}</h3>
      <h3>Health_History:{health_history}</h3>
      <Button LinkComponent={Link} to={`/patients/${_id}`} sx={{ mt: "auto" }}>
        Update Patient Information
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete Patient Information
      </Button>
    </div>
  );
};

export default Patient;
