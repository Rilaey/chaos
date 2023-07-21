require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

// image uploading
const multer = require('multer');
const path = require('path');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

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
    const user = await User.findById(req.params.id)
      .populate("status")
      .populate({
        path: "status",
        populate: { path: "createdBy" },
        options: { sort: { createdAt: -1 } } // Replace 'fieldNameToSort' with the actual field you want to sort by
      });

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
      password: req.body.password,
      bio: req.body.bio
    });

    // crete token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(`${err}`);
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);3

    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(`${err}`);
  }
};

// follow user
const followUser = async (req, res) => {
  try {
    const userToFollow = await User.findByIdAndUpdate(req.params.id, {
      $push: { followers: req.body.userId }
    });

    if (userToFollow) {
      res.status(404).json(`User already followed`);
    }

    const userSetFollowing = await User.findByIdAndUpdate(req.body.userId, {
      $push: { following: req.params.id }
    });

    res.status(200).json({ userToFollow, userSetFollowing });
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
    console.log(err);
  }
};

// upload profile picture
// const uploadProfilePicture = async (req, res) => {
//   try {
//     upload.single('image')

//     // Update the user's profile picture URL in the database
//     const user = await User.findByIdAndUpdate(req.params.id)
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Save the image metadata to MongoDB and update the user's profile picture field
//     user.profilePicture = '/uploads/' + req.file.filename;

//     await user.save();

//     // Respond with success status and the updated user object
//     res.status(200).json({ message: 'Profile picture uploaded successfully', user });
//   } catch (err) {
//     res.status(500).json(`Error: ${err}`);
//     console.log(err);
//   }
// }

module.exports = {
  getAllUsers,
  getOneUserById,
  createUser,
  loginUser,
  followUser,
  // uploadProfilePicture
};
