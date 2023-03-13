import React from "react";
import hospital from "../images/R12.jpg"
import "./Home.css"
const Home = () => {
  return (
    <div>
     <h1>Cape Medical Center</h1>
     <img src={hospital} alt="hospital"></img>
    </div>
  );
};
export default Home;
