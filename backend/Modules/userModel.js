// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Simple email format validation
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// Middleware to convert email to lowercase before saving
userSchema.pre('save', function(next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
