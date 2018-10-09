const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userDataSchema = new Schema({
  height: Number,
  weight: Number,
  age: Number,
  allergy: {type: String, enum: ["milk", "eggs", "nuts", "soy", "gluten", "fish", "shellfish", "others"]},
  objective: String,
  previousDiet: Boolean,

});

const UserData = mongoose.model('UserData', userDataSchema);
module.exports = UserData;