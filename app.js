const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();


const RestaurentRoute=require("./routes/RestaurentRoutes");

const FoodRoute=require("./routes/FoodRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/restaurent",RestaurentRoute);

app.use("/api/food",FoodRoute);

//mongodb connection string
mongoose
  .connect("mongodb+srv://rishika:12345@cluster0.rantmza.mongodb.net/",
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"))
  .catch("error", () => {
    console.log(error);
  });



app.listen(7000, () => {
    console.log("server started on 7000");
  });