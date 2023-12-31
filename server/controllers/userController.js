require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

// image uploading
const multer = require('multer');
// const path = require('path');

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
    // Find the user to follow
    const userToFollow = await User.findById(req.params.id);

    if (!userToFollow) {
      return res.status(404).json(`User to follow does not exist`);
    }

    // Check if the current user is already following the userToFollow
    const isFollowing = userToFollow.followers.includes(req.body.userId);

    if (isFollowing) {
      return res.status(400).json(`You are already following this user`);
    }

    // Update the userToFollow's followers array
    await User.findByIdAndUpdate(req.params.id, {
      $push: { followers: req.body.userId }
    });

    // Update the current user's following array
    const userSetFollowing = await User.findByIdAndUpdate(req.body.userId, {
      $push: { following: req.params.id }
    });

    res.status(200).json({ userToFollow, userSetFollowing });
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
    console.log(err);
  }
};



// unfollow user
const unfollowUser = async (req, res) => {
  try {
    const userToUnfollow = await User.findByIdAndUpdate(req.params.id, {
      $pull: { followers: req.body.userId}
    });

    const localUser = await User.findByIdAndUpdate(req.body.userId, {
      $pull: {following :  req.params.id},
    });

    res.status(200).json({ userToUnfollow, localUser })
  } catch (err) {
    res.status(500).json(`${err}`)
    console.log(err)
  }
}

module.exports = {
  getAllUsers,
  getOneUserById,
  createUser,
  loginUser,
  followUser,
  unfollowUser
};
