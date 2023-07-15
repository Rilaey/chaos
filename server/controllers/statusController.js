const { User, Status, Comment } = require("../models");

// get all status
const getAllStatus = async (req, res) => {
  try {
    const status = await Status.find()
      .populate("createdBy")
      .sort({ createdAt: "desc" })
      .limit(10);

    res.status(200).json(status);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// get status by id
const getStatusById = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id)
      .populate("createdBy")
      .populate({
        path: "statusComments",
        populate: { path: "commentCreator" },
        options: { sort: { createdAt: -1 } } // Replace 'fieldNameToSort' with the actual field you want to sort by
      });

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

// like status
const likeStatus = async (req, res) => {
  try {
    const status = await Status.findByIdAndUpdate(
      req.params.id,
      { $push: { likes: req.body.userId } }, // Assuming req.body.userId contains the user ID
      { new: true } // To return the updated status instead of the original one
    );

    // Update the user if necessary
    const user = await User.findByIdAndUpdate(
      req.body.userId, // Assuming req.body.userId contains the user ID
      { $push: { likedStatuses: req.params.id } } // Assuming you want to associate the liked status with the user
    );

    res.status(200).json({ status, user });
  } catch (err) {
    res.status(500).json(err);
  }
};

// comment status
const commentStatus = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id);

    const comment = await Comment.create({
      commentText: req.body.commentText,
      commentCreator: req.body.commentCreator
    });

    const user = await User.findById(req.body.commentCreator);

    user.comments.push(comment);

    status.statusComments.push(comment);

    await user.save();
    await status.save();

    res.status(200).json({ status, comment });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllStatus,
  getStatusById,
  createStatus,
  likeStatus,
  commentStatus
};
