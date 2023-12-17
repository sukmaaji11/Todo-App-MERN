const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static Signup Method
userSchema.statics.signup = async function (name, gender, email, password) {
  // Validation
  if (!name || !gender || !email || !password) {
    throw Error('All field must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });
  // Check Email
  if (exists) {
    throw Error('Email already exists');
  }
  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  // Create User
  const user = await this.create({ name, gender, email, password: hash });
  return user;
};

// Static Login Method
userSchema.statics.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('All field must be filled');
  }
  // Check Email
  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Incorrect email');
  }
  // Password Compare
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};
module.exports = mongoose.model('User', userSchema);
