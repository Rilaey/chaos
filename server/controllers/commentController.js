const { User, Status, Comment } = require("../models/index");

// leave comment on status
const commentStatus = async (req, res) => {
  try {
    const comment = await Comment.create({
      commentText: req.body.commentText,
      commentStatusId: req.params.commentStatusId,
      user: req.body.user
    });

    const status = await Status.findByIdAndUpdate(req.params.commentStatusId, {
      $push: { comments: comment._id }
    });

    const user = await User.findByIdAndUpdate(req.body.user, {
      $push: { statusComments: comment._id }
    });

    res.status(200).json({ comment, status, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// get all comments
const getAllComments = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id).populate("comments")

    res.status(200).json(status)
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("user");

    if (!comment) {
      res.status(404).json({ message: "No comment found!" });
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  commentStatus,
  getAllComments,
  getOneComment
};
