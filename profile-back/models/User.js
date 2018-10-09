const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  rol: { type: String, enum: ["admin", "client", "nutritionist"] },
  isClient: { type: Boolean, default: false },
  isNutricionist: { type: Boolean, default: false},
  fee: { type: Number, default: null }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
