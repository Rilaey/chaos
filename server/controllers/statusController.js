const { Status } = require("../models");

// get all status
const getAllStatus = async (req, res) => {
  try {
    const status = await Status.find();

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

    res.status(200).json(status);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

module.exports = { getAllStatus, getStatusById, createStatus }