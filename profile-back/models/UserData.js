const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userDataSchema = new Schema({
  height: Number,
  weight: Number,
  age: Number,
  allergy: {type: String, enum: ["milk", "eggs", "nuts", "soy", "gluten", "fish", "shellfish", "others"]},
  previousDiet: Boolean,
  objective: String,

});

const UserData = mongoose.model('UserData', userDataSchema);
module.exports = UserData;