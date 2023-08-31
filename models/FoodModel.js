const mongoose = require('mongoose');

let foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

});
module.exports = mongoose.model("FoodModel", foodSchema);
