const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dietSchema = new Schema({
  desayuno: String,
  almuerzo: String,
  comida: String,
  merienda: String,
  cena: String,
});

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;
