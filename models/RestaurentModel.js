const mongoose = require("mongoose");
const foodSchema = require("./FoodModel");
const restaurentModel = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  cusine: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  address: [
    {
      city: {
        type: String,
        require: true,
      },
      street: {
        type: String,
        require: true,
      },
    },
  ],
  food:[foodSchema.schema],

});
module.exports = mongoose.model("RestaurentModel", restaurentModel);
