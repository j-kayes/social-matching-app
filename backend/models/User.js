const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age:      { type: Number },
  location: { type: String },
  likes:    { type: [String], default: [] },
  dislikes: { type: [String], default: [] }
});

module.exports = mongoose.model('User', UserSchema);
