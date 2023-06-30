const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes")
const statusRoutes = require("./statusRoutes")

router.use("/user", userRoutes);
router.use("/status", statusRoutes);

module.exports = router;