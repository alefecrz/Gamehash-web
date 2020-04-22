const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: String,
  password: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Room', RoomSchema);