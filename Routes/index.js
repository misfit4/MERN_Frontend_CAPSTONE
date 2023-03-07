const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//set up middle ware
app.use(express.json());
const cors = require("cors");

app.use(cors());
const router = require("./Routes/car-routes");
app.use("/cars", router)
//establish communication to MongoDB atlas (database)

mongoose.connect("mongodb+srv://mcknightdarold33:<password>@cluster0.hdvfqmp.mongodb.net/CapeHealth?retryWrites=true&w=majority").then(() => 
console.log("Connected to Database")).then(() =>{
    app.listen(3001)
}).catch((err) => console.log(err));
