const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//set up middle ware
app.use(express.json());
const cors = require("cors");

app.use(cors());
const router = require("./Routes/PatientRoutes");
app.use("/patients", router)
//establish communication to MongoDB atlas (database)

mongoose.connect("mongodb+srv://mcknightdarold33:Student123!@cluster0.hdvfqmp.mongodb.net/CapeHealth?retryWrites=true&w=majority").then(() => 
console.log("Connected to Database")).then(() =>{
    app.listen(3002)
}).catch((err) => console.log(err));
