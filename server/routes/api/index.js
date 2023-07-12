const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes")
const statusRoutes = require("./statusRoutes")
const commentRoutes = require("./commentRoutes")

router.use("/user", userRoutes);
router.use("/status", statusRoutes);
router.use("/comment", commentRoutes);

module.exports = router;