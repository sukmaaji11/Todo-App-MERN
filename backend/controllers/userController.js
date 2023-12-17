const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create Token
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // Create Token
    const token = createToken(user._id);
    // Response
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ msg: 'login user' });
};

// Signup User
const signupUser = async (req, res) => {
  const { name, gender, email, password } = req.body;
  try {
    const user = await User.signup(name, gender, email, password);
    // Create Token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ msg: 'signup user' });
};

module.exports = {
  signupUser,
  loginUser,
};