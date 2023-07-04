const { User, Status } = require("../models");

// get all status
const getAllStatus = async (req, res) => {
  try {
    const status = await Status.find().populate("createdBy").sort({createdAt: "desc"});

    res.status(200).json(status);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// get status by id
const getStatusById = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id);

    res.status(200).json(status);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// create status
const createStatus = async (req, res) => {
  try {
    const status = await Status.create({
      message: req.body.message,
      createdBy: req.body.createdBy
    });

    // Find the user associated with the createdBy value
    const user = await User.findById(req.body.createdBy);

    // Append the new status to the user's array of statuses
    user.status.push(status);

    // Save the updated user
    await user.save();

    res.status(200).json(status);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

module.exports = { getAllStatus, getStatusById, createStatus };
