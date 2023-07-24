const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");
const { User } = require("../../models/index");
const mongoose = require("mongoose");

const {
  getAllUsers,
  getOneUserById,
  createUser,
  loginUser,
  followUser,
  unfollowUser
} = require("../../controllers/userController");

router.get("/allUsers", getAllUsers);

router.get("/oneUser/:id", getOneUserById);

router.post("/createUser", createUser);

router.post("/loginUser", loginUser);

router.put("/followUser/:id", followUser);

router.put("/unfollowUser/:id", unfollowUser);

// profile image route
router.post("/profilePicture/:id", upload.single("profilePicture"), async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send("Invalid user ID");
    }

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update the profile picture filename in the user document
    user.profilePicture = req.file.filename;
    await user.save();

    res.send("Profile picture uploaded successfully!");
    // res.status(200).json(req.file)
  } catch (err) {
    console.error(err);
    res.status(500).json(`${err}`);
  }
});


module.exports = router;
