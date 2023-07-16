const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUserById,
  createUser,
  loginUser,
  followUser
} = require("../../controllers/userController");

router.get("/allUsers", getAllUsers);

router.get("/oneUser/:id", getOneUserById);

router.post("/createUser", createUser);

router.post("/loginUser", loginUser);

router.put("/followUser/:id", followUser);

module.exports = router;
