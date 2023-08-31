const express = require("express");
const restaurentRoute = express.Router();
const RestaurentModel = require("../models/RestaurentModel");
restaurentRoute.post("/addrestaurent", (req, res) => {
  //add restaurents(create)
  const data = new RestaurentModel({
    name: req.body.name,
    location: req.body.location,
    cusine: req.body.cusine,
    description: req.body.description,
    address: req.body.address,
    city:req.body.city,
    street:req.body.street,
    food:req.body.food,
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
//fetch restaurents(read)

restaurentRoute.get("/viewrestaurents", (req, res) => {
  RestaurentModel.find()
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
});

//view restaurent by id
restaurentRoute.get("/viewrestaurent-id/:id", (req, res) => {
  RestaurentModel.findOne({
    _id:req.params.id
   })
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
});


//update
restaurentRoute.post("/updaterestaurent/:id", (req, res, next) => {
  const data = new RestaurentModel({
    _id: req.params.id,
    name: req.body.name,
    location: req.body.location,
    cusine: req.body.cusine,
    description: req.body.description,
    city:req.body.city,
    street:req.body.street
  });
  data
    .updateOne(data)
    .then(() => {
      res.status(200).json({
        success: true,
        error: false,
        message: "data updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});


//delete
restaurentRoute.post("/deleterestaurent/:id", (req, res) => {
  RestaurentModel.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({
        success: true,
        error: false,
        message: "data updated successfully!",
      });
    })
    .catch((error) => console.log(error));
});

module.exports = restaurentRoute;
