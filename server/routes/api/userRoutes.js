const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUserById,
  createUser
} = require("../../controllers/userController");

router.get("/allUsers", getAllUsers);

router.get("/oneUser/:id", getOneUserById);

router.post("/createUser", createUser);

module.exports = router;
