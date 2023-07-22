const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");

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

module.exports = router;
