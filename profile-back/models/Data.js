const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dataSchema = new Schema({
  edad: Number,
  peso: Number,
  estatura: Number,
});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
