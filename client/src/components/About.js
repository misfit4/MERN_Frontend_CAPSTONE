import React from "react";
import {Box,Typography} from "@mui/material"
import hospital from "../images/R11.jpg"
const About = () => {
  return (
    <>
    <div>
        <img class="R11.jpg" src={hospital} alt="Staff"></img>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h5">
          Cape HealthCare
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h6">
          Established  &copy;2023
        </Typography>
      </Box>
    </div>
  </>
  );
};
export default About;
