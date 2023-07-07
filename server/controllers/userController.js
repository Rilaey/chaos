require('dotenv').config()
const { User } = require("../models");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1d"})
}

// find all users
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// find one user by id
const getOneUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });

    // crete token
    const token = createToken(user._id)

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(err);
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password)

    const token = createToken(user._id)

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
    console.log(err)
  }
};

module.exports = {
  getAllUsers,
  getOneUserById,
  createUser,
  loginUser
};
