const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  profile: String,
  name: String,
  email: String,
  password_hash: String,
},{
  toJSON:{
    virtuals:true,
  }
});

UserSchema.virtual('profile_url').get(function(){
  return `http://localhost:8081/files/${this.profile}`;
});

module.exports = mongoose.model('User', UserSchema);