const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dataSchema = new Schema({
  sexo: String,
  edad: Number,
  peso: Number,
  estatura: Number,
  alergias: String,
  noMeGusta: String,
  primDieta: String,
  objetivo: String,
  userId: {type: Schema.Types.ObjectId, ref: "User"}
});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
