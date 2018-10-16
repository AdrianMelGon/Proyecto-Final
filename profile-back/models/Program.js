const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const programSchema = new Schema({
  name: String,
  description: String,
  duration: String,
  popularity: Number,
  picture: String,
  fee: Number
}
);

const Program = mongoose.model('Program', programSchema);
module.exports = Program;