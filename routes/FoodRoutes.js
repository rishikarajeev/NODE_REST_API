const express = require("express");
const foodRoute = express.Router();
const FoodModel = require("../models/FoodModel");
foodRoute.post("/addfood", (req, res) => {
    //add restaurents(create)
    const data = new FoodModel({
      foodname: req.body.foodname,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
   
    
      
    });
    data
      .save()
      .then(() => {
        // res.send(data);
        res.status(200).json({
          success: true,
          error: false,
          message: "data added successfully!",
        });
      })
      .catch((error) => console.log(error));
  });

  module.exports = foodRoute;